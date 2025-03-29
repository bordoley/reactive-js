/// <reference types="./Collection.d.ts" />

import { newInstance } from "../functions.js";
export const keySet = (m) => (collection) => newInstance((Set), m.keys()(collection));
