/// <reference types="./computations.d.ts" />

import { pickUnsafe, returns, } from "./functions.js";
export const Computation_T = Symbol("Computation_T");
export const Computation_type = Symbol("Computation_type");
export const keepType = ((m, predicate) => m.keep(predicate));
export const mapTo = (m, v) => m.map(returns(v));
export const pick = (m, ...keys) => m.map(pickUnsafe(...keys));
