/// <reference types="./Object.d.ts" />
const Object_init = Symbol("Object_init");
const Object_properties = Symbol("Object_properties");
const { create: createObject, getOwnPropertyDescriptors, prototype: objectPrototype, } = Object;
const initUnsafe = (mixin, self, ...args) => {
    mixin[Object_init].call(self, ...args);
};
const init = initUnsafe;
const createObjectFactory = () => (mixin) => {
    const propertyDescription = getOwnPropertyDescriptors(mixin[Object_properties]);
    const mixinDescription = getOwnPropertyDescriptors(mixin);
    const { [Object_properties]: _properties, [Object_init]: _init, ...prototypeDescription } = mixinDescription;
    const prototype = createObject(objectPrototype, prototypeDescription);
    return (...args) => {
        const instance = createObject(prototype, propertyDescription);
        initUnsafe(mixin, instance, ...args);
        return instance;
    };
};
const mixWith = (...mixins) => (lastProto) => {
    const propertyDescriptors = mixins
        .map(mixin => getOwnPropertyDescriptors(mixin))
        .reduce((acc, next) => ({ ...acc, ...next }), {});
    const properties = [...mixins, lastProto]
        .map(mixin => mixin[Object_properties])
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
