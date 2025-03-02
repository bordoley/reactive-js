/// <reference types="./EventSource.d.ts" />

import { Computation_type, } from "../computations.js";
import EventSource_addEventHandler from "./EventSource/__private__/EventSource.addEventHandler.js";
import EventSource_create from "./EventSource/__private__/EventSource.create.js";
import EventSource_fromPromise from "./EventSource/__private__/EventSource.fromPromise.js";
import EventSource_keep from "./EventSource/__private__/EventSource.keep.js";
import EventSource_map from "./EventSource/__private__/EventSource.map.js";
import EventSource_mergeMany from "./EventSource/__private__/EventSource.mergeMany.js";
export const addEventHandler = EventSource_addEventHandler;
export const create = EventSource_create;
export const fromPromise = EventSource_fromPromise;
export const keep = EventSource_keep;
export const map = EventSource_map;
export const mergeMany = EventSource_mergeMany;
