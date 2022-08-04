/// <reference types="./Object.d.ts" />
import { __DEV__ } from '../env.mjs';

const Object_init = Symbol("Object_init");
const Object_properties = Symbol("Object_properties");
const Object_prototype = Symbol("Object_prototype");
const { create: createObject, getOwnPropertyDescriptors, prototype: objectPrototype, } = Object;
const initUnsafe = (clazz, self, ...args) => clazz[Object_init].call(self, ...args);
const init = initUnsafe;
const createObjectFactory = () => (clazz) => {
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
const mixWith = (...mixins) => (lastTMixin) => {
    const properties = [...mixins, lastTMixin]
        .map(clazz => clazz[Object_properties])
        .reduce((acc, next) => ({ ...acc, ...next }), {});
    const prototypeDescriptions = [...mixins, lastTMixin]
        .map(clazz => getOwnPropertyDescriptors(clazz[Object_prototype]))
        .reduce((acc, next) => ({ ...acc, ...next }), {});
    return {
        [Object_init]: lastTMixin[Object_init],
        [Object_properties]: properties,
        [Object_prototype]: createObject(objectPrototype, prototypeDescriptions),
    };
};
const clazz = (init, properties, prototype) => ({
    [Object_init]: init,
    [Object_properties]: properties !== null && properties !== void 0 ? properties : {},
    [Object_prototype]: prototype !== null && prototype !== void 0 ? prototype : {},
});

export { Object_init, Object_properties, Object_prototype, clazz, createObjectFactory, init, mixWith };
