import _camelCase from 'lodash/camelCase';
import _first from 'lodash/first';
import _isPlainObject from 'lodash/isPlainObject';
import _last from 'lodash/last';
import _map from 'lodash/map';
import _mapKeys from 'lodash/mapKeys';
import _orderBy from 'lodash/orderBy';
import _reduce from 'lodash/reduce';
import _snakeCase from 'lodash/snakeCase';
import _upperCase from 'lodash/upperCase';

export const mapKeys = (object, callback) => _mapKeys(object, callback)

export const camelCase = (key) => _camelCase(key);

export const snakeCase = (key) => _snakeCase(key);

export const isPlainObject = (object) => _isPlainObject(object);

export const map = (array, callback) => _map(array, callback);

export const last = (array) => _last(array)

export const first = (array) => _first(array)

export const upperCase = (string) => _upperCase(string)

export const orderBy = (collection, iteratees = [], orders = []) => _orderBy(collection, iteratees, orders)

export const reduce = (collection, iteratees=() => {}, accumulator=undefined) => _reduce(collection, iteratees, accumulator)