import {
  Equality,
  Factory,
  Function1,
  Reducer,
  Updater,
} from "../functions.js";
import { ObservableLike } from "../rx.js";
import { StreamLike, StreamableLike } from "../streaming.js";
import { QueueableLike, QueueableLike_backpressureStrategy } from "../util.js";
import Streamable_create from "./Streamable/__internal__/Streamable.create.js";
import Streamable_createActionReducer from "./Streamable/__internal__/Streamable.createActionReducer.js";
import Streamable_createBlockingEventHandler from "./Streamable/__internal__/Streamable.createBlockingEventHandler.js";
import Streamable_createInMemoryCache from "./Streamable/__internal__/Streamable.createInMemoryCache.js";
import Streamable_createPersistentCache from "./Streamable/__internal__/Streamable.createPersistentCache.js";
import Streamable_createQueueingEventHandler from "./Streamable/__internal__/Streamable.createQueueingEventHandler.js";
import Streamable_createStateStore from "./Streamable/__internal__/Streamable.createStateStore.js";
import Streamable_createSwitchingEventHandler from "./Streamable/__internal__/Streamable.createSwitchingEventHandler.js";
import Streamable_identity from "./Streamable/__internal__/Streamable.identity.js";
import Streamable_sinkInto from "./Streamable/__internal__/Streamable.sinkInto.js";

/**
 * @category Constructor
 */
export const create = Streamable_create;

/**
 * Returns a new `StreamableLike` instance that applies an accumulator function
 * over the notified actions, emitting each intermediate result.
 *
 * @param reducer - The accumulator function called on each notified action.
 * @param initialState - The initial accumulation value.
 * @param equals - Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 *
 * @category Constructor
 */
export const createActionReducer: <TAction, T>(
  reducer: Reducer<TAction, T>,
  initialState: Factory<T>,
  options?: { readonly equality?: Equality<T> },
) => StreamableLike<TAction, T> = Streamable_createActionReducer;

/**
 * Returns an event handler that invokes the observable function,
 * and blocks, ignoring any subsequent events until the initial eventHandler
 * disposes.
 *
 * @category Constructor
 */
export const createBlockingEventHandler: <TEvent>(
  op: Function1<TEvent, ObservableLike<unknown>>,
) => StreamableLike<TEvent, boolean> = Streamable_createBlockingEventHandler;

/**
 * @category Constructor
 */
export const createInMemoryCache = Streamable_createInMemoryCache;

/**
 * @category Constructor
 */
export const createPersistentCache = Streamable_createPersistentCache;

/**
 * Returns an event handler that invokes the observable function,
 * an Observable function, limiting the number of concurrent subscriptions,
 * and applying the backpressure policy if the number of dispatched events
 * exceeds the handlers capacity.
 *
 * @category Constructor
 */
export const createQueueingEventHandler: <TEvent>(
  op: Function1<TEvent, ObservableLike<unknown>>,
  options?: {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
    readonly maxConcurrency?: number;
  },
) => StreamableLike<TEvent, never> = Streamable_createQueueingEventHandler;

/**
 * Returns a new `StateStoreLike` instance that stores state which can
 * be updated by notifying the instance with a `StateUpdater` that computes a
 * new state based upon the previous state.
 *
 * @param initialState - The initial accumulation value.
 * @param equals - Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 *
 * @category Constructor
 */
export const createStateStore: <T>(
  initialState: Factory<T>,
  options?: { readonly equality?: Equality<T> },
) => StreamableLike<Updater<T>, T> = Streamable_createStateStore;

/**
 * Returns an event handler that invokes the observable function,
 * and cancels any outstanding inner event handlers.
 *
 * @category Constructor
 */
export const createSwitchingEventHandler: <TEvent>(
  op: Function1<TEvent, ObservableLike<unknown>>,
) => StreamableLike<TEvent, never> = Streamable_createSwitchingEventHandler;

/**
 * @category Constructor
 */
export const identity = Streamable_identity;

export const sinkInto: <TReq, T>(
  dest: StreamLike<T, TReq>,
) => (src: StreamableLike<TReq, T>) => StreamableLike<TReq, T> =
  Streamable_sinkInto;
