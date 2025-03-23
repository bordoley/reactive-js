/// <reference types="./mixins.d.ts" />

import { isFunction, raiseIf, } from "../functions.js";
import * as Obj from "./Object.js";
import { Array_length, __DEV__ } from "./constants.js";
export const Mixin_init = /*@__PURE__*/ Symbol("Mixin_init");
export const Mixin_private_initializedProperties = /*@__PURE__*/ Symbol("Mixin_private_initializedProperties");
export const Mixin_properties = /*@__PURE__*/ Symbol("Mixin_properties");
export const Mixin_proto = /*@__PURE__*/ Symbol("Mixin_proto");
export const Mixin_protoDescription = /*@__PURE__*/ Symbol("Mixin_protoDescription");
function initUnsafe(mixin, instance, ...args) {
    const f = mixin[Mixin_init];
    if (__DEV__) {
        for (const key of Reflect.ownKeys(mixin[Mixin_properties])) {
            raiseIf(!Obj.hasOwn(instance, key), `Failed to include ${mixin[Mixin_init].name}.`);
        }
    }
    f.call(instance, ...args);
}
export const init = initUnsafe;
export const include = (...mixins) => {
    const length = mixins[Array_length];
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
                ...mixin[Mixin_protoDescription],
            };
        }
        return {
            [Mixin_properties]: Obj.create(Obj.prototype, propertyDescriptions),
            [Mixin_protoDescription]: prototypeDescriptions,
        };
    }
};
export const mix = ((initOrParent, propertiesOrInit, prototypeOrProperties, nothingOrPrototype) => {
    if (isFunction(initOrParent)) {
        return {
            [Mixin_init]: initOrParent,
            [Mixin_properties]: propertiesOrInit ?? {},
            [Mixin_protoDescription]: Obj.getOwnPropertyDescriptors(prototypeOrProperties ?? {}),
        };
    }
    else {
        const base = include(initOrParent, {
            [Mixin_properties]: prototypeOrProperties ?? {},
            [Mixin_protoDescription]: Obj.getOwnPropertyDescriptors(nothingOrPrototype ?? {}),
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
            ...mixin[Mixin_protoDescription],
            constructor: {
                configurable: true,
                enumerable: false,
                value: mixin[Mixin_init],
                writable: true,
            },
        }
        : mixin[Mixin_protoDescription];
    const prototype = Obj.create(Obj.prototype, prototypeDescription);
    return (...args) => {
        const instance = Obj.create(prototype, propertyDescription);
        initUnsafe(mixin, instance, ...args);
        return instance;
    };
};
export const mixInstanceFactory = ((initOrParent, propertiesOrInit, prototypeOrParent, nothingOrPrototype) => createInstanceFactory(mix(initOrParent, propertiesOrInit, prototypeOrParent, nothingOrPrototype)));
const emptyProps = {};
export const props = (o) => {
    return (o ?? emptyProps);
};
export function unsafeCast(_v) { }
export const proto = (o) => o;
export const super_ = ((mixin, thiz, method, ...args) => {
    const descriptor = mixin[Mixin_protoDescription][method];
    const f = descriptor.value;
    return f.call(thiz, ...args);
});
export const getProperty = (mixin, thiz, method) => {
    const descriptor = mixin[Mixin_protoDescription][method];
    const f = descriptor.get;
    return f.call(thiz);
};
