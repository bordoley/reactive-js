/// <reference types="./StreamableLike.d.ts" />
import createActionReducer$1 from './__internal__/StreamableLike/StreamableLike.createActionReducer.mjs';
import createStateStore$1 from './__internal__/StreamableLike/StreamableLike.createStateStore.mjs';
import sinkInto$1 from './__internal__/StreamableLike/StreamableLike.sinkInto.mjs';
import stream$1 from './__internal__/StreamableLike/StreamableLike.stream.mjs';

/**
 * Returns a new `StreamableLike` instance that applies an accumulator function
 * over the notified actions, emitting each intermediate result.
 *
 * @param reducer The accumulator function called on each notified action.
 * @param initialState The initial accumulation value.
 * @param equals Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 */
const createActionReducer = createActionReducer$1;
/**
 * Returns a new `StateStoreLike` instance that stores state which can
 * be updated by notifying the instance with a `StateUpdater` that computes a
 * new state based upon the previous state.
 *
 * @param initialState The initial accumulation value.
 * @param equals Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 */
const createStateStore = createStateStore$1;
const sinkInto = sinkInto$1;
const stream = stream$1;

export { createActionReducer, createStateStore, sinkInto, stream };
