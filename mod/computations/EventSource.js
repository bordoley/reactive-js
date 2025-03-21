/// <reference types="./EventSource.d.ts" />

import { Computation_baseOfT, Computation_multicastOfT, } from "../computations.js";
import EventSource_addEventHandler from "./EventSource/__private__/EventSource.addEventHandler.js";
import EventSource_combineLatest from "./EventSource/__private__/EventSource.combineLatest.js";
import EventSource_create from "./EventSource/__private__/EventSource.create.js";
import EventSource_createPauseable from "./EventSource/__private__/EventSource.createPauseable.js";
import EventSource_empty from "./EventSource/__private__/EventSource.empty.js";
import EventSource_firstAsync from "./EventSource/__private__/EventSource.firstAsync.js";
import EventSource_forkMerge from "./EventSource/__private__/EventSource.forkMerge.js";
import EventSource_fromAsyncIterable from "./EventSource/__private__/EventSource.fromAsyncIterable.js";
import EventSource_fromPromise from "./EventSource/__private__/EventSource.fromPromise.js";
import EventSource_fromReadonlyArray from "./EventSource/__private__/EventSource.fromReadonlyArray.js";
import EventSource_fromValue from "./EventSource/__private__/EventSource.fromValue.js";
import EventSource_gen from "./EventSource/__private__/EventSource.gen.js";
import EventSource_keep from "./EventSource/__private__/EventSource.keep.js";
import EventSource_lastAsync from "./EventSource/__private__/EventSource.lastAsync.js";
import EventSource_map from "./EventSource/__private__/EventSource.map.js";
import EventSource_merge from "./EventSource/__private__/EventSource.merge.js";
import EventSource_never from "./EventSource/__private__/EventSource.never.js";
import EventSource_raise from "./EventSource/__private__/EventSource.raise.js";
import EventSource_reduceAsync from "./EventSource/__private__/EventSource.reduceAsync.js";
import EventSource_takeUntil from "./EventSource/__private__/EventSource.takeUntil.js";
import EventSource_toProducer from "./EventSource/__private__/EventSource.toProducer.js";
import EventSource_toReadonlyArrayAsync from "./EventSource/__private__/EventSource.toReadonlyArrayAsync.js";
import EventSource_withLatestFrom from "./EventSource/__private__/EventSource.withLatestFrom.js";
import EventSource_zipLatest from "./EventSource/__private__/EventSource.zipLatest.js";
import Observable_fromEventSource from "./Observable/__private__/Observable.fromEventSource.js";
import Observable_toEventSource from "./Observable/__private__/Observable.toEventSource.js";
export const addEventHandler = EventSource_addEventHandler;
export const combineLatest = EventSource_combineLatest;
export const create = EventSource_create;
export const createPauseable = EventSource_createPauseable;
export const empty = EventSource_empty;
export const firstAsync = EventSource_firstAsync;
export const forkMerge = EventSource_forkMerge;
export const fromAsyncIterable = EventSource_fromAsyncIterable;
export const fromObservable = Observable_toEventSource;
export const fromPromise = EventSource_fromPromise;
export const fromReadonlyArray = EventSource_fromReadonlyArray;
export const fromValue = EventSource_fromValue;
export const gen = EventSource_gen;
export const genWithSideEffects = EventSource_gen;
export const keep = EventSource_keep;
export const lastAsync = EventSource_lastAsync;
export const map = EventSource_map;
export const merge = EventSource_merge;
export const never = EventSource_never;
export const raise = EventSource_raise;
export const reduceAsync = EventSource_reduceAsync;
export const takeUntil = EventSource_takeUntil;
export const toObservable = Observable_fromEventSource;
export const toProducer = EventSource_toProducer;
export const toReadonlyArrayAsync = EventSource_toReadonlyArrayAsync;
export const withLatestFrom = EventSource_withLatestFrom;
export const zipLatest = EventSource_zipLatest;
