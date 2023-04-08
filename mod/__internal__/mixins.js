/// <reference types="./mixins.d.ts" />

import { isFunction, none, pipe, returns, } from "../functions.js";
import ReadonlyArray_getLength from "../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.getLength.js";
import * as Obj from "./Object.js";
import { __DEV__ } from "./constants.js";
import { __DelegatingLike_delegate as DelegatingLike_delegate, __Object_init, __Object_private_initializedProperties, __Object_properties, __Object_prototype, } from "./symbols.js";
export { DelegatingLike_delegate };
function initUnsafe(mixin, instance, ...args) {
    const f = mixin[__Object_init];
    f(instance, ...args);
}
export const init = initUnsafe;
export const include = (...mixins) => {
    const length = ReadonlyArray_getLength(mixins);
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
                ...Obj.getOwnPropertyDescriptors(mixin[__Object_properties]),
            };
            prototypeDescriptions = {
                ...prototypeDescriptions,
                ...Obj.getOwnPropertyDescriptors(mixin[__Object_prototype]),
            };
        }
        return {
            [__Object_properties]: Obj.create(Obj.prototype, propertyDescriptions),
            [__Object_prototype]: Obj.create(Obj.prototype, prototypeDescriptions),
        };
    }
};
export const mix = ((initOrParent, propertiesOrInit, prototypeOrParent, nothingOrPrototype) => {
    if (isFunction(initOrParent)) {
        return {
            [__Object_init]: initOrParent,
            [__Object_properties]: propertiesOrInit ?? {},
            [__Object_prototype]: prototypeOrParent ?? {},
        };
    }
    else {
        const base = include(initOrParent, {
            [__Object_properties]: prototypeOrParent ?? {},
            [__Object_prototype]: nothingOrPrototype ?? {},
        });
        return {
            ...base,
            [__Object_init]: propertiesOrInit,
        };
    }
});
export const createInstanceFactory = (mixin) => {
    const propertyDescription = Obj.getOwnPropertyDescriptors(mixin[__Object_properties]);
    const prototypeDescription = __DEV__
        ? {
            ...Obj.getOwnPropertyDescriptors(mixin[__Object_prototype]),
            constructor: {
                configurable: true,
                enumerable: false,
                value: mixin[__Object_init],
                writable: true,
            },
        }
        : Obj.getOwnPropertyDescriptors(mixin[__Object_prototype]);
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
export const delegatingMixin = /*@__PURE__*/ (() => {
    return pipe(mix(function DelegatingDisposableMixin(instance, delegate) {
        instance[DelegatingLike_delegate] = delegate;
        return instance;
    }, props({
        [DelegatingLike_delegate]: none,
    }), {}), returns);
})();
export const getPrototype = (mixin) => mixin[__Object_prototype];
