/// <reference types="./Streamable.d.ts" />
import Streamable_createActionReducer from './Streamable/__internal__/Streamable.createActionReducer.mjs';
import Streamable_createStateStore from './Streamable/__internal__/Streamable.createStateStore.mjs';
import Streamable_sinkInto from './Streamable/__internal__/Streamable.sinkInto.mjs';
import Streamable_stream from './Streamable/__internal__/Streamable.stream.mjs';

/**
 * Returns a new `StreamableLike` instance that applies an accumulator function
 * over the notified actions, emitting each intermediate result.
 *
 * @param reducer The accumulator function called on each notified action.
 * @param initialState The initial accumulation value.
 * @param equals Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 */
const createActionReducer = Streamable_createActionReducer;
/**
 * Returns a new `StateStoreLike` instance that stores state which can
 * be updated by notifying the instance with a `StateUpdater` that computes a
 * new state based upon the previous state.
 *
 * @param initialState The initial accumulation value.
 * @param equals Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 */
const createStateStore = Streamable_createStateStore;
const sinkInto = Streamable_sinkInto;
const stream = Streamable_stream;
/** @ignore */
const Streamable = {
    createActionReducer,
    createStateStore,
    sinkInto,
    stream,
};

export { createActionReducer, createStateStore, Streamable as default, sinkInto, stream };
