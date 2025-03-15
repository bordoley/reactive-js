import {
  ComputationModule,
  ComputationType,
  Computation_T,
  Computation_baseOfT,
  Computation_multicastOfT,
  ConcurrentReactiveComputationModule,
  EventSourceLike,
} from "../computations.js";
import { Function1, SideEffect1 } from "../functions.js";
import { DisposableLike, EventListenerLike } from "../utils.js";
import EventSource_addEventHandler from "./EventSource/__private__/EventSource.addEventHandler.js";
import EventSource_combineLatest from "./EventSource/__private__/EventSource.combineLatest.js";
import EventSource_create from "./EventSource/__private__/EventSource.create.js";
import EventSource_empty from "./EventSource/__private__/EventSource.empty.js";
import EventSource_firstAsync from "./EventSource/__private__/EventSource.firstAsync.js";
import EventSource_forkMerge from "./EventSource/__private__/EventSource.forkMerge.js";
import EventSource_fromAsyncIterable from "./EventSource/__private__/EventSource.fromAsyncIterable.js";
import EventSource_fromIterable from "./EventSource/__private__/EventSource.fromIterable.js";
import EventSource_fromPromise from "./EventSource/__private__/EventSource.fromPromise.js";
import EventSource_fromReadonlyArray from "./EventSource/__private__/EventSource.fromReadonlyArray.js";
import EventSource_fromValue from "./EventSource/__private__/EventSource.fromValue.js";
import EventSource_gen from "./EventSource/__private__/EventSource.gen.js";
import EventSource_generate from "./EventSource/__private__/EventSource.generate.js";
import EventSource_keep from "./EventSource/__private__/EventSource.keep.js";
import EventSource_lastAsync from "./EventSource/__private__/EventSource.lastAsync.js";
import EventSource_map from "./EventSource/__private__/EventSource.map.js";
import EventSource_merge from "./EventSource/__private__/EventSource.merge.js";
import EventSource_never from "./EventSource/__private__/EventSource.never.js";
import EventSource_raise from "./EventSource/__private__/EventSource.raise.js";
import EventSource_reduceAsync from "./EventSource/__private__/EventSource.reduceAsync.js";
import EventSource_takeUntil from "./EventSource/__private__/EventSource.takeUntil.js";
import EventSource_toReadonlyArrayAsync from "./EventSource/__private__/EventSource.toReadonlyArrayAsync.js";
import EventSource_withLatestFrom from "./EventSource/__private__/EventSource.withLatestFrom.js";
import EventSource_zipLatest from "./EventSource/__private__/EventSource.zipLatest.js";
import Observable_fromEventSource from "./Observable/__private__/Observable.fromEventSource.js";
import Observable_toEventSource from "./Observable/__private__/Observable.toEventSource.js";

/**
 * @noInheritDoc
 */
export interface EventSourceComputation extends ComputationType {
  readonly [Computation_baseOfT]?: EventSourceLike<this[typeof Computation_T]>;

  readonly [Computation_multicastOfT]?: EventSourceLike<
    this[typeof Computation_T]
  >;
}

export type Computation = EventSourceComputation;

/**
 * @noInheritDoc
 */
export interface EventSourceModule
  extends ComputationModule<EventSourceComputation>,
    ConcurrentReactiveComputationModule<EventSourceComputation> {
  addEventHandler<T>(
    handler: SideEffect1<T>,
  ): Function1<EventSourceLike<T>, DisposableLike>;

  create<T>(
    setup: SideEffect1<EventListenerLike<T>>,
    options?: {
      readonly autoDispose?: boolean;
    },
  ): EventSourceLike<T> & DisposableLike;
}

export type Signature = EventSourceModule;

export const addEventHandler: Signature["addEventHandler"] =
  EventSource_addEventHandler;
export const combineLatest: Signature["combineLatest"] =
  EventSource_combineLatest;
export const create: Signature["create"] = EventSource_create;
export const empty: Signature["empty"] = EventSource_empty;
export const firstAsync: Signature["firstAsync"] = EventSource_firstAsync;
export const forkMerge: Signature["forkMerge"] = EventSource_forkMerge;
export const fromAsyncIterable: Signature["fromAsyncIterable"] =
  EventSource_fromAsyncIterable;
export const fromIterable: Signature["fromIterable"] = EventSource_fromIterable;
export const fromObservable: Signature["fromObservable"] =
  Observable_toEventSource as Signature["fromObservable"];
export const fromPromise: Signature["fromPromise"] = EventSource_fromPromise;
export const fromReadonlyArray: Signature["fromReadonlyArray"] =
  EventSource_fromReadonlyArray;
export const fromValue: Signature["fromValue"] = EventSource_fromValue;
export const gen: Signature["gen"] = EventSource_gen;
export const generate: Signature["generate"] = EventSource_generate;
export const keep: Signature["keep"] = EventSource_keep;
export const lastAsync: Signature["lastAsync"] = EventSource_lastAsync;
export const map: Signature["map"] = EventSource_map;
export const merge: Signature["merge"] = EventSource_merge;
export const never: Signature["never"] = EventSource_never;
export const raise: Signature["raise"] = EventSource_raise;
export const reduceAsync: Signature["reduceAsync"] = EventSource_reduceAsync;
export const takeUntil: Signature["takeUntil"] = EventSource_takeUntil;
export const toObservable: Signature["toObservable"] =
  Observable_fromEventSource as Signature["toObservable"];
export const toReadonlyArrayAsync: Signature["toReadonlyArrayAsync"] =
  EventSource_toReadonlyArrayAsync;
export const withLatestFrom: Signature["withLatestFrom"] =
  EventSource_withLatestFrom;
export const zipLatest: Signature["zipLatest"] = EventSource_zipLatest;
