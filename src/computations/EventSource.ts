import {
  ComputationModule,
  ComputationType,
  Computation_T,
  Computation_baseOfT,
  Computation_multicastOfT,
  ConcurrentReactiveComputationModule,
  EventSourceLike,
  IterableLike,
} from "../computations.js";
import { Factory, Function1, SideEffect1, Updater } from "../functions.js";
import { DisposableLike, EventListenerLike } from "../utils.js";
import EventSource_addEventHandler from "./EventSource/__private__/EventSource.addEventHandler.js";
import EventSource_create from "./EventSource/__private__/EventSource.create.js";
import EventSource_empty from "./EventSource/__private__/EventSource.empty.js";
import EventSource_fromIterable from "./EventSource/__private__/EventSource.fromIterable.js";
import EventSource_fromPromise from "./EventSource/__private__/EventSource.fromPromise.js";
import EventSource_fromReadonlyArray from "./EventSource/__private__/EventSource.fromReadonlyArray.js";
import EventSource_fromValue from "./EventSource/__private__/EventSource.fromValue.js";
import EventSource_generate from "./EventSource/__private__/EventSource.generate.js";
import EventSource_keep from "./EventSource/__private__/EventSource.keep.js";
import EventSource_map from "./EventSource/__private__/EventSource.map.js";
import EventSource_merge from "./EventSource/__private__/EventSource.merge.js";
import EventSource_never from "./EventSource/__private__/EventSource.never.js";
import EventSource_raise from "./EventSource/__private__/EventSource.raise.js";
import EventSource_toReadonlyArrayAsync from "./EventSource/__private__/EventSource.toReadonlyArrayAsync.js";
import EventSource_withLatestFrom from "./EventSource/__private__/EventSource.withLatestFrom.js";

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
  ): EventSourceLike<T> & DisposableLike;

  empty<T>(): EventSourceLike<T> & DisposableLike;

  fromIterable<T>(): Function1<
    IterableLike<T>,
    EventSourceLike<T> & DisposableLike
  >;

  fromReadonlyArray<T>(options?: {
    readonly count?: number;
    readonly start?: number;
  }): Function1<readonly T[], EventSourceLike<T> & DisposableLike>;

  fromValue<T>(): Function1<T, EventSourceLike<T> & DisposableLike>;

  generate<T>(
    generator: Updater<T>,
    initialValue: Factory<T>,
    options?: {
      readonly count?: number;
    },
  ): EventSourceLike<T> & DisposableLike;

  raise<T>(options?: {
    readonly raise?: Factory<unknown>;
  }): EventSourceLike<T> & DisposableLike;
}

export type Signature = EventSourceModule;

export const addEventHandler: Signature["addEventHandler"] =
  EventSource_addEventHandler;
export const create: Signature["create"] = EventSource_create;
export const empty: Signature["empty"] = EventSource_empty;
export const fromIterable: Signature["fromIterable"] = EventSource_fromIterable;
export const fromPromise: Signature["fromPromise"] = EventSource_fromPromise;
export const fromReadonlyArray: Signature["fromReadonlyArray"] =
  EventSource_fromReadonlyArray;
export const fromValue: Signature["fromValue"] = EventSource_fromValue;
export const generate: Signature["generate"] = EventSource_generate;
export const keep: Signature["keep"] = EventSource_keep;
export const map: Signature["map"] = EventSource_map;
export const merge: Signature["merge"] = EventSource_merge;
export const never: Signature["never"] = EventSource_never;
export const raise: Signature["raise"] = EventSource_raise;
export const toReadonlyArrayAsync: Signature["toReadonlyArrayAsync"] =
  EventSource_toReadonlyArrayAsync;
export const withLatestFrom: Signature["withLatestFrom"] =
  EventSource_withLatestFrom;
