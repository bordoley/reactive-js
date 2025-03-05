/// <reference types="./EventSource.d.ts" />

import { Computation_baseOfT, Computation_deferredWithSideEffectsOfT, Computation_multicastOfT, Computation_pureDeferredOfT, Computation_pureSynchronousOfT, Computation_synchronousWithSideEffectsOfT, } from "../computations.js";
import EventSource_addEventHandler from "./EventSource/__private__/EventSource.addEventHandler.js";
import EventSource_combineLatest from "./EventSource/__private__/EventSource.combineLatest.js";
import EventSource_create from "./EventSource/__private__/EventSource.create.js";
import EventSource_fromPromise from "./EventSource/__private__/EventSource.fromPromise.js";
import EventSource_keep from "./EventSource/__private__/EventSource.keep.js";
import EventSource_map from "./EventSource/__private__/EventSource.map.js";
import EventSource_merge from "./EventSource/__private__/EventSource.merge.js";
import EventSource_withLatestFrom from "./EventSource/__private__/EventSource.withLatestFrom.js";
import EventSource_zipLatest from "./EventSource/__private__/EventSource.zipLatest.js";
export const addEventHandler = EventSource_addEventHandler;
export const combineLatest = EventSource_combineLatest;
export const create = EventSource_create;
export const fromPromise = EventSource_fromPromise;
export const keep = EventSource_keep;
export const map = EventSource_map;
export const merge = EventSource_merge;
export const withLatestFrom = EventSource_withLatestFrom;
export const zipLatest = EventSource_zipLatest;
