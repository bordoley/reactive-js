/// <reference types="./Object.d.ts" />

import { alwaysTrue, isNone, } from "../functions.js";
const { create, getOwnPropertyDescriptors, prototype } = Object;
export { create, getOwnPropertyDescriptors, prototype };
const hasOwn = (obj, key) => prototype.hasOwnProperty.call(obj, key);
const _empty = /*@__PURE__*/ create(null);
export const empty = () => _empty;
export const forEach = (effect) => (obj) => {
    for (const key in obj) {
        if (hasOwn(obj, key)) {
            const v = obj[key];
            effect(v, key);
        }
    }
    return obj;
};
export const keep = (predicate) => (obj) => {
    const result = create(null);
    for (const key in obj) {
        if (hasOwn(obj, key)) {
            const v = obj[key];
            if (predicate(v, key)) {
                result[key] = v;
            }
        }
    }
    return result;
};
export const keepType = (predicate) => (obj) => {
    const result = create(null);
    for (const key in obj) {
        if (hasOwn(obj, key)) {
            const v = obj[key];
            if (predicate(v)) {
                result[key] = v;
            }
        }
    }
    return result;
};
export const keys = (predicate = alwaysTrue) => (obj) => {
    const keys = new Set();
    for (const key in obj) {
        const v = obj[key];
        if (hasOwn(obj, key) && predicate(v, key)) {
            keys.add(key);
        }
    }
    return keys;
};
export const map = (mapper) => (obj) => {
    const result = create(null);
    for (const key in obj) {
        if (hasOwn(obj, key)) {
            result[key] = mapper(obj[key], key);
        }
    }
    return result;
};
export const union = (m1, m2) => {
    const result = create(null);
    for (const key in m1) {
        if (hasOwn(m1, key)) {
            result[key] = m1[key];
        }
    }
    for (const key in m2) {
        if (hasOwn(m2, key) && isNone(result[key])) {
            result[key] = m2[key];
        }
    }
    return result;
};
