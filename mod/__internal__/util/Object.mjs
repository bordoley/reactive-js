/// <reference types="./Object.d.ts" />
import { none } from '../../functions.mjs';

const Object_init = Symbol("Object_init");
const Object_properties = Symbol("Object_properties");
const init = (prototype, self, ...args) => {
    prototype[Object_init].call(self, ...args);
};
const createObjectFactory = () => (prototype) => {
    const propertyDesccription = Object.getOwnPropertyDescriptors(prototype[Object_properties]);
    return (...args) => {
        const instance = Object.create(prototype, propertyDesccription);
        instance[Object_init](...args);
        return instance;
    };
};
const mixWith = (...prototypes) => (lastProto) => {
    const propertyDescriptors = prototypes
        .map(prototype => Object.getOwnPropertyDescriptors(prototype))
        .reduce((acc, next) => ({ ...acc, ...next }), {});
    const properties = [...prototypes, lastProto]
        .map(prototype => prototype[Object_properties])
        .reduce((acc, next) => ({ ...acc, ...next }), {});
    const descriptor = {
        ...propertyDescriptors,
        ...Object.getOwnPropertyDescriptors(lastProto),
        [Object_properties]: {
            configurable: true,
            enumerable: true,
            value: properties,
            writable: true,
        },
    };
    return Object.create(Object.prototype, descriptor);
};
const anyProperty = none;

export { Object_init, Object_properties, anyProperty, createObjectFactory, init, mixWith };
