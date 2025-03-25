/// <reference types="./Producer.d.ts" />

import { Computation_baseOfT, Computation_deferredWithSideEffectsOfT, Computation_multicastOfT, Computation_pureDeferredOfT, Computation_pureSynchronousOfT, Computation_synchronousWithSideEffectsOfT, } from "../computations.js";
import Producer_broadcast from "./Producer/__private__/Producer.broadcast.js";
import { Producer_gen, Producer_genPure, } from "./Producer/__private__/Producer.gen.js";
import Producer_keep from "./Producer/__private__/Producer.keep.js";
import Producer_map from "./Producer/__private__/Producer.map.js";
import Producer_toReadonlyArrayAsync from "./Producer/__private__/Producer.toReadonlyArrayAsync.js";
export const broadcast = Producer_broadcast;
export const gen = Producer_gen;
export const genPure = Producer_genPure;
export const keep = Producer_keep;
export const map = Producer_map;
export const toReadonlyArrayAsync = Producer_toReadonlyArrayAsync;
