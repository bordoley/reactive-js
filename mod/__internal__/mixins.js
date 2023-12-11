/// <reference types="./mixins.d.ts" />

import { isFunction, } from "../functions.js";
import * as Obj from "./Object.js";
import { __DEV__ } from "./constants.js";
export const Mixin_init = /*@__PURE__*/ Symbol("Mixin_init");
export const Mixin_private_initializedProperties = /*@__PURE__*/ Symbol("Mixin_private_initializedProperties");
export const Mixin_properties = /*@__PURE__*/ Symbol("Mixin_properties");
export const Mixin_prototype = /*@__PURE__*/ Symbol("Mixin_prototype");
function initUnsafe(mixin, instance, ...args) {
    const f = mixin[Mixin_init];
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
                ...Obj.getOwnPropertyDescriptors(mixin[Mixin_properties]),
            };
            prototypeDescriptions = {
                ...prototypeDescriptions,
                ...Obj.getOwnPropertyDescriptors(mixin[Mixin_prototype]),
            };
        }
        return {
            [Mixin_properties]: Obj.create(Obj.prototype, propertyDescriptions),
            [Mixin_prototype]: Obj.create(Obj.prototype, prototypeDescriptions),
        };
    }
};
export const mix = ((initOrParent, propertiesOrInit, prototypeOrParent, nothingOrPrototype) => {
    if (isFunction(initOrParent)) {
        return {
            [Mixin_init]: initOrParent,
            [Mixin_properties]: propertiesOrInit ?? {},
            [Mixin_prototype]: prototypeOrParent ?? {},
        };
    }
    else {
        const base = include(initOrParent, {
            [Mixin_properties]: prototypeOrParent ?? {},
            [Mixin_prototype]: nothingOrPrototype ?? {},
        });
        return {
            ...base,
            [Mixin_init]: propertiesOrInit,
        };
    }
});
export const createInstanceFactory = (mixin) => {
    const propertyDescription = Obj.getOwnPropertyDescriptors(mixin[Mixin_properties]);
    const prototypeDescription = __DEV__
        ? {
            ...Obj.getOwnPropertyDescriptors(mixin[Mixin_prototype]),
            constructor: {
                configurable: true,
                enumerable: false,
                value: mixin[Mixin_init],
                writable: true,
            },
        }
        : Obj.getOwnPropertyDescriptors(mixin[Mixin_prototype]);
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
export const getPrototype = (mixin) => mixin[Mixin_prototype];
export function unsafeCast(_v) { }
