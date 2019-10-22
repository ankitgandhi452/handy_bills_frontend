import { createOffline } from '@redux-offline/redux-offline';
import config from '@redux-offline/redux-offline/lib/config';
import Api from 'configurations/network/Api';
import { combinedReducer } from "configurations/redux/reducers";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const ApiInstance = new Api();

const effect = (effect, _action) => ApiInstance.fetch(effect, _action);

const discard = async (error, _action, _retries) => ApiInstance.errorHandling(error, _action, _retries);

const offlineConfig = {
    ...config,
    effect,
    discard,
    persist: false
}

let persistStorage = storage;

const persistConfig = {
    version: 0,
    key: 'handyBills',
    storage: persistStorage,
    blacklist: []
}

const {
    middleware: offlineMiddleware,
    enhanceReducer: offlineEnhanceReducer,
    enhanceStore: offlineEnhanceStore
  } = createOffline({
    ...offlineConfig,
});

const persistedReducer = persistReducer(persistConfig, offlineEnhanceReducer(combinedReducer))

console.log(ApiInstance)
const middlewares = [
    thunk.withExtraArgument(ApiInstance),
    offlineMiddleware
]

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const store = createStore(persistedReducer, composeEnhancers(offlineEnhanceStore, applyMiddleware(...middlewares)));


// const store = createStore(combinedReducer, allReducer, offline(config));

const persistor = persistStore(store, 
    {}, 
    () => {
        // This is called fater rehydraete is done.
        console.log('handybills store rehydrate done');
    }
)

const purgeData = () => {
    return new Promise((resolve, reject) => {
        persistor.purge()
        .then(res => {
            resolve(true);
        })
        .catch(err => {
            reject(false);
        })
    })
}

const flushData = () => {
    return new Promise((resolve, reject) => {
        persistor.flush()
        .then(res => {
            resolve(true);
        })
        .catch(err => {
            reject(false);
        })
    })
}

const pausePersistance = () => {
    return new Promise((resolve, reject) => {
        persistor.pause()
        .then(res => {
            resolve(true);
        })
        .catch(err => {
            reject(false);
        })
    })
}

const persistData = () => {
    return new Promise((resolve, reject) => {
        persistor.persist()
        .then(res => {
            resolve(true);
        })
        .catch(err => {
            reject(false);
        })
    })
}

window.persistor = persistor;

export { store, persistor, purgeData, flushData, pausePersistance, persistData };

