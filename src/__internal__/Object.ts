import { call } from "../functions.js";

const { create, getOwnPropertyDescriptors, prototype } = Object;

export { create, getOwnPropertyDescriptors, prototype };

export const hasOwn = (obj: object, key: PropertyKey): boolean =>
  call(prototype.hasOwnProperty, obj, key);
