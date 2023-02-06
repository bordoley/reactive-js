/// <reference types="./mixins.d.ts" />
import { getLength, isFunction, pipe, none, returns } from '../functions.mjs';

const Object_init = Symbol("Object_init");
const Object_properties = Symbol("Object_properties");
const Object_prototype = Symbol("Object_prototype");
const Object_private_initializedProperties = Symbol("Object_private_initializedProperties");
const { create: createObject, getOwnPropertyDescriptors, prototype: objectPrototype, } = Object;
function initUnsafe(mixin, instance, ...args) {
    const f = mixin[Object_init];
    f.call(undefined, instance, ...args);
}
const init = initUnsafe;
const include = (...mixins) => {
    const length = getLength(mixins);
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
                ...getOwnPropertyDescriptors(mixin[Object_properties]),
            };
            prototypeDescriptions = {
                ...prototypeDescriptions,
                ...getOwnPropertyDescriptors(mixin[Object_prototype]),
            };
        }
        return {
            [Object_properties]: createObject(objectPrototype, propertyDescriptions),
            [Object_prototype]: createObject(objectPrototype, prototypeDescriptions),
        };
    }
};
const mix = ((initOrParent, propertiesOrInit, prototypeOrParent, nothingOrPrototype) => {
    if (isFunction(initOrParent)) {
        return {
            [Object_init]: initOrParent,
            [Object_properties]: propertiesOrInit !== null && propertiesOrInit !== void 0 ? propertiesOrInit : {},
            [Object_prototype]: prototypeOrParent !== null && prototypeOrParent !== void 0 ? prototypeOrParent : {},
        };
    }
    else {
        const base = include(initOrParent, {
            [Object_properties]: prototypeOrParent !== null && prototypeOrParent !== void 0 ? prototypeOrParent : {},
            [Object_prototype]: nothingOrPrototype !== null && nothingOrPrototype !== void 0 ? nothingOrPrototype : {},
        });
        return {
            ...base,
            [Object_init]: propertiesOrInit,
        };
    }
});
const createInstanceFactory = (mixin) => {
    const propertyDescription = getOwnPropertyDescriptors(mixin[Object_properties]);
    const prototypeDescription = {
        ...getOwnPropertyDescriptors(mixin[Object_prototype]),
        constructor: {
            configurable: true,
            enumerable: true,
            value: mixin[Object_init],
            writable: true,
        },
    };
    const prototype = createObject(objectPrototype, prototypeDescription);
    return (...args) => {
        const instance = createObject(prototype, propertyDescription);
        initUnsafe(mixin, instance, ...args);
        return instance;
    };
};
const props = (o) => {
    return o;
};
const DelegatingLike_delegate = Symbol("DelegatingMixin_delegate");
const delegatingMixin = /*@__PURE__*/ (() => {
    return pipe(mix(function DelegatingDisposableMixin(instance, delegate) {
        instance[DelegatingLike_delegate] = delegate;
        return instance;
    }, props({
        [DelegatingLike_delegate]: none,
    }), {}), returns);
})();

export { DelegatingLike_delegate, createInstanceFactory, delegatingMixin, include, init, mix, props };
