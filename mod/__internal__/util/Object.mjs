/// <reference types="./Object.d.ts" />
const Object_init = Symbol("Object_init");
const Object_properties = Symbol("Object_properties");
const { create: createObject, getOwnPropertyDescriptors, prototype: objectPrototype, } = Object;
const initUnsafe = (prototype, self, ...args) => {
    prototype[Object_init].call(self, ...args);
};
const init = initUnsafe;
const createObjectFactory = () => (prototype) => {
    const propertyDescription = getOwnPropertyDescriptors(prototype[Object_properties]);
    const prototypeDescription = getOwnPropertyDescriptors(prototype);
    const { [Object_properties]: _properties, [Object_init]: _init, ...objectPrototypeDescription } = prototypeDescription;
    const factoryPrototype = createObject(objectPrototype, objectPrototypeDescription);
    return (...args) => {
        const instance = createObject(factoryPrototype, propertyDescription);
        initUnsafe(prototype, instance, ...args);
        return instance;
    };
};
const mixWith = (...prototypes) => (lastProto) => {
    const propertyDescriptors = prototypes
        .map(prototype => getOwnPropertyDescriptors(prototype))
        .reduce((acc, next) => ({ ...acc, ...next }), {});
    const properties = [...prototypes, lastProto]
        .map(prototype => prototype[Object_properties])
        .reduce((acc, next) => ({ ...acc, ...next }), {});
    const descriptor = {
        ...propertyDescriptors,
        ...getOwnPropertyDescriptors(lastProto),
        [Object_properties]: {
            configurable: true,
            enumerable: true,
            value: properties,
            writable: true,
        },
    };
    return createObject(objectPrototype, descriptor);
};

export { Object_init, Object_properties, createObjectFactory, init, mixWith };
