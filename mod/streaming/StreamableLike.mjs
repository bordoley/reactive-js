/// <reference types="./StreamableLike.d.ts" />
import StreamableLike__createActionReducer from './__internal__/StreamableLike/StreamableLike.createActionReducer.mjs';
import StreamableLike__createStateStore from './__internal__/StreamableLike/StreamableLike.createStateStore.mjs';
import StreamableLike__sinkInto from './__internal__/StreamableLike/StreamableLike.sinkInto.mjs';
import StreamableLike__stream from './__internal__/StreamableLike/StreamableLike.stream.mjs';

/**
 * Returns a new `StreamableLike` instance that applies an accumulator function
 * over the notified actions, emitting each intermediate result.
 *
 * @param reducer The accumulator function called on each notified action.
 * @param initialState The initial accumulation value.
 * @param equals Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 */
const createActionReducer = StreamableLike__createActionReducer;
/**
 * Returns a new `StateStoreLike` instance that stores state which can
 * be updated by notifying the instance with a `StateUpdater` that computes a
 * new state based upon the previous state.
 *
 * @param initialState The initial accumulation value.
 * @param equals Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 */
const createStateStore = StreamableLike__createStateStore;
const sinkInto = StreamableLike__sinkInto;
const stream = StreamableLike__stream;

export { createActionReducer, createStateStore, sinkInto, stream };
