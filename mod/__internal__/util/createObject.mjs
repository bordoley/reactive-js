/// <reference types="./createObject.d.ts" />
const createObject = (prototype, properties) => Object.create(prototype, Object.getOwnPropertyDescriptors(properties));

export { createObject };
