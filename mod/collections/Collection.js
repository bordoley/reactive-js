/// <reference types="./Collection.d.ts" />

import { newInstance } from "../functions.js";
export const keySet = (keys) => (collection) => newInstance((Set), keys()(collection));
