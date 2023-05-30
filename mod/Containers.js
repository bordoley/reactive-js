/// <reference types="./Containers.d.ts" />

import { pickUnsafe, returns } from "./functions.js";
export const keepType = ((m, predicate) => m.keep(predicate));
export const mapTo = (m, v) => m.map(returns(v));
export const pick = (m, ...keys) => m.map(pickUnsafe(...keys));
