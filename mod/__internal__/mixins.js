/// <reference types="./mixins.d.ts" />

import { isFunction, } from "../functions.js";
import * as Obj from "./Object.js";
import { __DEV__ } from "./constants.js";
export const Object_init = /*@__PURE__*/ Symbol("Object_init");
export const Object_private_initializedProperties = /*@__PURE__*/ Symbol("Object_private_initializedProperties");
export const Object_properties = /*@__PURE__*/ Symbol("Object_properties");
export const Object_prototype = /*@__PURE__*/ Symbol("Object_prototype");
function initUnsafe(mixin, instance, ...args) {
    const f = mixin[Object_init];
    f(instance, ...args);
}
export const init = initUnsafe;
export const include = (...mixins) => {
    const { length } = mixins;
    if (length == 1) {
        return mixins[0];
    }
    else {
        let propertyDescriptions = {};
        let prototypeDescriptions = {};
        for (let i = 0; i < length; i++) {
            const mixin = mixins[i];
            propertyDescriptions = {
                ...propertyDescriptions,
                ...Obj.getOwnPropertyDescriptors(mixin[Object_properties]),
            };
            prototypeDescriptions = {
                ...prototypeDescriptions,
                ...Obj.getOwnPropertyDescriptors(mixin[Object_prototype]),
            };
        }
        return {
            [Object_properties]: Obj.create(Obj.prototype, propertyDescriptions),
            [Object_prototype]: Obj.create(Obj.prototype, prototypeDescriptions),
        };
    }
};
export const mix = ((initOrParent, propertiesOrInit, prototypeOrParent, nothingOrPrototype) => {
    if (isFunction(initOrParent)) {
        return {
            [Object_init]: initOrParent,
            [Object_properties]: propertiesOrInit ?? {},
            [Object_prototype]: prototypeOrParent ?? {},
        };
    }
    else {
        const base = include(initOrParent, {
            [Object_properties]: prototypeOrParent ?? {},
            [Object_prototype]: nothingOrPrototype ?? {},
        });
        return {
            ...base,
            [Object_init]: propertiesOrInit,
        };
    }
});
export const createInstanceFactory = (mixin) => {
    const propertyDescription = Obj.getOwnPropertyDescriptors(mixin[Object_properties]);
    const prototypeDescription = __DEV__
        ? {
            ...Obj.getOwnPropertyDescriptors(mixin[Object_prototype]),
            constructor: {
                configurable: true,
                enumerable: false,
                value: mixin[Object_init],
                writable: true,
            },
        }
        : Obj.getOwnPropertyDescriptors(mixin[Object_prototype]);
    const prototype = Obj.create(Obj.prototype, prototypeDescription);
    return (...args) => {
        const instance = Obj.create(prototype, propertyDescription);
        initUnsafe(mixin, instance, ...args);
        return instance;
    };
};
export const props = (o) => {
    return o;
};
export const getPrototype = (mixin) => mixin[Object_prototype];
export function unsafeCast(_v) { }
