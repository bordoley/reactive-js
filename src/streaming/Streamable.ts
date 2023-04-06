import { Equality, Factory, Reducer, Updater } from "../functions.js";
import { StreamLike, StreamableLike } from "../streaming.js";
import Streamable_create from "./Streamable/__internal__/Streamable.create.js";
import Streamable_createActionReducer from "./Streamable/__internal__/Streamable.createActionReducer.js";
import Streamable_createEventHandler from "./Streamable/__internal__/Streamable.createEventHandler.js";
import Streamable_createInMemoryCache from "./Streamable/__internal__/Streamable.createInMemoryCache.js";
import Streamable_createPersistentCache from "./Streamable/__internal__/Streamable.createPersistentCache.js";
import Streamable_createStateStore from "./Streamable/__internal__/Streamable.createStateStore.js";
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
 * Returns an event handler that invokes the observable function.
 *
 * @category Constructor
 */
export const createEventHandler = Streamable_createEventHandler;

/**
 * @category Constructor
 */
export const createInMemoryCache = Streamable_createInMemoryCache;

/**
 * @category Constructor
 */
export const createPersistentCache = Streamable_createPersistentCache;

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
 * @category Constructor
 */
export const identity = Streamable_identity;

export const sinkInto: <TReq, T>(
  dest: StreamLike<T, TReq>,
) => (src: StreamableLike<TReq, T>) => StreamableLike<TReq, T> =
  Streamable_sinkInto;
