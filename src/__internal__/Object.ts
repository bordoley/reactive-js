import { call } from "../functions.js";
import { Obj, nullObject } from "./constants.js";

export const create = Obj.create;
export const getOwnPropertyDescriptors = Obj.getOwnPropertyDescriptors;
export const prototype = Obj.prototype;

export const hasOwn = (obj: object, key: PropertyKey): boolean =>
  call(prototype.hasOwnProperty, obj, key);

export const createObjectMap: <TKey extends string = string, T = unknown>() => {
  [P in TKey]?: T;
} = () => create(nullObject);
