/// <reference types="./EventSource.d.ts" />

import { Computation_type, } from "../computations.js";
import EventSource_addEventHandler from "./EventSource/__private__/EventSource.addEventHandler.js";
import EventSource_create from "./EventSource/__private__/EventSource.create.js";
import EventSource_fromPromise from "./EventSource/__private__/EventSource.fromPromise.js";
import EventSource_fromReadonlyArray from "./EventSource/__private__/EventSource.fromReadonlyArray.js";
import EventSource_keep from "./EventSource/__private__/EventSource.keep.js";
import EventSource_map from "./EventSource/__private__/EventSource.map.js";
import EventSource_merge from "./EventSource/__private__/EventSource.merge.js";
import EventSource_mergeMany from "./EventSource/__private__/EventSource.mergeMany.js";
import EventSource_mergeWith from "./EventSource/__private__/EventSource.mergeWith.js";
export const addEventHandler = EventSource_addEventHandler;
export const create = EventSource_create;
export const fromPromise = EventSource_fromPromise;
export const fromReadonlyArray = EventSource_fromReadonlyArray;
export const keep = EventSource_keep;
export const map = EventSource_map;
export const merge = EventSource_merge;
export const mergeMany = EventSource_mergeMany;
export const mergeWith = EventSource_mergeWith;
