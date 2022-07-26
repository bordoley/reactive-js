/// <reference types="./Object.d.ts" />
const Object_init = Symbol("Object_init");
const Object_properties = Symbol("Object_properties");
const init = (prototype, self, ...args) => {
    prototype[Object_init].call(self, ...args);
};
const mix = (...prototypes) => {
    const propertyDescriptors = prototypes.map(prototype => Object.getOwnPropertyDescriptors(prototype));
    const descriptor = propertyDescriptors.reduce((acc, next) => ({ ...acc, ...next }), {});
    return Object.create(Object.prototype, descriptor);
};
const createObjectFactory = () => (prototype) => {
    const propertyDesccription = Object.getOwnPropertyDescriptors(prototype[Object_properties]);
    return (...args) => {
        const instance = Object.create(prototype, propertyDesccription);
        instance[Object_init](...args);
        return instance;
    };
};

export { Object_init, Object_properties, createObjectFactory, init, mix };
