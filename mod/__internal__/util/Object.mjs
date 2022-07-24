/// <reference types="./Object.d.ts" />
const Object_init = Symbol("Object_init");
const init = (prototype, self, ...args) => {
    prototype[Object_init].call(self, ...args);
};
const createObjectFactory = (prototype, properties) => {
    const propertyDesccription = Object.getOwnPropertyDescriptors(properties);
    return (...args) => {
        const instance = Object.create(prototype, propertyDesccription);
        instance[Object_init](...args);
        return instance;
    };
};

export { Object_init, createObjectFactory, init };
