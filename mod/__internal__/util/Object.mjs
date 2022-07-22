/// <reference types="./Object.d.ts" />
const createObjectFactory = (prototype, properties) => {
    const propertyDesccription = Object.getOwnPropertyDescriptors(properties);
    return () => Object.create(prototype, propertyDesccription);
};

export { createObjectFactory };
