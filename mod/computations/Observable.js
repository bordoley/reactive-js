/// <reference types="./Observable.d.ts" />

import { Computation_baseOfT, Computation_deferredWithSideEffectsOfT, Computation_multicastOfT, Computation_pureDeferredOfT, Computation_pureSynchronousOfT, Computation_synchronousWithSideEffectsOfT, } from "../computations.js";
import Observable_distinctUntilChanged from "./Observable/__private__/Observable.distinctUntilChanged.js";
import { Observable_gen, Observable_genPure, } from "./Observable/__private__/Observable.gen.js";
import Observable_keep from "./Observable/__private__/Observable.keep.js";
import Observable_toProducer from "./Observable/__private__/Observable.toProducer.js";
import Observable_toReadonlyArrayAsync from "./Observable/__private__/Observable.toReadonlyArrayAsync.js";
import Observable_map from "./Observable/__private__/Producer.map.js";
export const distinctUntilChanged = Observable_distinctUntilChanged;
export const gen = Observable_gen;
export const genPure = Observable_genPure;
export const keep = Observable_keep;
export const map = Observable_map;
export const toProducer = Observable_toProducer;
export const toReadonlyArrayAsync = Observable_toReadonlyArrayAsync;
