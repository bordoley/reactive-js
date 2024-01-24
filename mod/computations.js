/// <reference types="./computations.d.ts" />

import { pickUnsafe, returns, } from "./functions.js";
export const Computation_T = Symbol("Computation_T");
export const Computation_type = Symbol("Computation_type");
export const keepType = ((keep, predicate) => keep(predicate));
export const mapTo = (map, v) => map(returns(v));
export const pick = (map, ...keys) => map(pickUnsafe(...keys));
