/// <reference types="./Object.d.ts" />

import { call } from "../functions.js";
import { nullObject } from "./constants.js";
const { create, getOwnPropertyDescriptors, prototype } = Object;
export { create, getOwnPropertyDescriptors, prototype };
export const hasOwn = (obj, key) => call(prototype.hasOwnProperty, obj, key);
export const createObjectMap = () => create(nullObject);
