/// <reference types="./Streamable.d.ts" />

import Streamable_create from "./Streamable/__internal__/Streamable.create.js";
import Streamable_createEventHandler from "./Streamable/__internal__/Streamable.createEventHandler.js";
import Streamable_createInMemoryCache from "./Streamable/__internal__/Streamable.createInMemoryCache.js";
import Streamable_createPersistentCache from "./Streamable/__internal__/Streamable.createPersistentCache.js";
import Streamable_createStateStore from "./Streamable/__internal__/Streamable.createStateStore.js";
import Streamable_identity from "./Streamable/__internal__/Streamable.identity.js";
/**
 * @category Constructor
 */
export const create = Streamable_create;
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
export const createStateStore = Streamable_createStateStore;
/**
 * @category Constructor
 */
export const identity = Streamable_identity;
