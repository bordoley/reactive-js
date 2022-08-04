/// <reference types="./Object.d.ts" />
import { __DEV__ } from '../env.mjs';

const Object_init = Symbol("Object_init");
const Object_properties = Symbol("Object_properties");
const Object_properties_type = Symbol("Object_properties_type");
const Object_prototype = Symbol("Object_prototype");
const { create: createObject, getOwnPropertyDescriptors, prototype: objectPrototype, } = Object;
const initUnsafe = (clazz, self, ...args) => clazz[Object_init].call(self, ...args);
const init = initUnsafe;
const __extends = (...mixins) => {
    if (mixins.length == 1) {
        return mixins[0];
    }
    else {
        const properties = mixins
            .map(clazz => clazz[Object_properties])
            .reduce((acc, next) => ({ ...acc, ...next }), {});
        const prototypeDescriptions = mixins
            .map(clazz => getOwnPropertyDescriptors(clazz[Object_prototype]))
            .reduce((acc, next) => ({ ...acc, ...next }), {});
        return {
            [Object_properties]: properties,
            [Object_prototype]: createObject(objectPrototype, prototypeDescriptions),
        };
    }
};
const clazz = ((initOrParent, propertiesOrInit, prototypeOrParent, nothingOrPrototype) => {
    if (typeof initOrParent === "function") {
        return {
            [Object_init]: initOrParent,
            [Object_properties]: propertiesOrInit !== null && propertiesOrInit !== void 0 ? propertiesOrInit : {},
            [Object_prototype]: prototypeOrParent !== null && prototypeOrParent !== void 0 ? prototypeOrParent : {},
        };
    }
    else {
        const base = __extends(initOrParent, {
            [Object_properties]: prototypeOrParent !== null && prototypeOrParent !== void 0 ? prototypeOrParent : {},
            [Object_prototype]: nothingOrPrototype !== null && nothingOrPrototype !== void 0 ? nothingOrPrototype : {},
        });
        return {
            ...base,
            [Object_init]: propertiesOrInit,
        };
    }
});
const createInstanceFactory = (clazz) => {
    const propertyDescription = getOwnPropertyDescriptors(clazz[Object_properties]);
    const constructorObject = __DEV__
        ? {
            constructor: {
                configurable: true,
                enumerable: true,
                value: clazz[Object_init],
                writable: true,
            },
        }
        : {};
    const prototypeDescription = {
        ...getOwnPropertyDescriptors(clazz[Object_prototype]),
        ...constructorObject,
    };
    const prototype = createObject(objectPrototype, prototypeDescription);
    return (...args) => {
        const instance = createObject(prototype, propertyDescription);
        return initUnsafe(clazz, instance, ...args);
    };
};

export { Object_init, Object_properties, Object_properties_type, Object_prototype, __extends, clazz, createInstanceFactory, init };
