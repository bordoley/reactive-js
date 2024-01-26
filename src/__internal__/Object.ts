import { call } from "../functions.js";
import { nullObject } from "./constants.js";

const { create, getOwnPropertyDescriptors, prototype } = Object;

export { create, getOwnPropertyDescriptors, prototype };

export const hasOwn = (obj: object, key: PropertyKey): boolean =>
  call(prototype.hasOwnProperty, obj, key);

export const createObjectMap: <TKey extends string = string, T = unknown>() => {
  [P in TKey]?: T;
} = () => create(nullObject);
