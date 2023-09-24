/// <reference types="./Object.d.ts" />

const { create, getOwnPropertyDescriptors, prototype } = Object;
export { create, getOwnPropertyDescriptors, prototype };
export const hasOwn = (obj, key) => prototype.hasOwnProperty.call(obj, key);
