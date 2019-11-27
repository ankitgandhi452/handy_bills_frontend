import _camelCase from 'lodash/camelCase';
import _isPlainObject from 'lodash/isPlainObject';
import _map from 'lodash/map';
import _mapKeys from 'lodash/mapKeys';
import _snakeCase from 'lodash/snakeCase';

export const mapKeys = (object, callback) => _mapKeys(object, callback)

export const camelCase = (key) => _camelCase(key);

export const snakeCase = (key) => _snakeCase(key);

export const isPlainObject = (object) => _isPlainObject(object);

export const map = (array, callback) => _map(array, callback);