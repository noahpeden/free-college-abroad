import * as types from './types';

export function filterCountries(filter) {
    return {
        type: types.FILTER,
        filter
    };
}
