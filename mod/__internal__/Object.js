/// <reference types="./Object.d.ts" />

import { call } from "../functions.js";
import { Obj, nullObject } from "./constants.js";
export const create = Obj.create;
export const getOwnPropertyDescriptors = Obj.getOwnPropertyDescriptors;
export const prototype = Obj.prototype;
export const hasOwn = (obj, key) => call(prototype.hasOwnProperty, obj, key);
export const createObjectMap = () => create(nullObject);
