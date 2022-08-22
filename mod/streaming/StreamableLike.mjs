/// <reference types="./StreamableLike.d.ts" />
import { createLiftedStreamable } from '../__internal__/streaming/__internal__StreamableLike.mjs';
import { ignoreElements, concatWith } from '../containers/ContainerLike.mjs';
import { toObservable } from '../containers/ReadonlyArrayLike.mjs';
import { pipe, returns, updateReducer } from '../functions.mjs';
import { merge, forEach, keepT, onSubscribe, subscribe, create, scan, mergeT, distinctUntilChanged } from '../rx/ObservableLike.mjs';
import { sinkInto as sinkInto$1 } from '../rx/ReactiveContainerLike.mjs';
import { DispatcherLike_scheduler } from '../scheduling.mjs';
import { dispatchTo } from '../scheduling/DispatcherLike.mjs';
import { StreamableLike_stream } from '../streaming.mjs';
import { addTo, add } from '../util/DisposableLike.mjs';

const stream = (scheduler, options) => streamable => streamable[StreamableLike_stream](scheduler, options);
const sinkInto = (dest) => (src) => {
    const { [DispatcherLike_scheduler]: scheduler } = dest;
    const srcStream = pipe(src, stream(scheduler));
    pipe(merge(pipe(srcStream, forEach(dispatchTo(dest)), ignoreElements(keepT), onSubscribe(() => dest)), pipe(dest, forEach(dispatchTo(srcStream)), ignoreElements(keepT))), ignoreElements(keepT), subscribe(scheduler), addTo(dest), add(srcStream));
    return src;
};
/**
 * Returns a new `StreamableLike` instance that applies an accumulator function
 * over the notified actions, emitting each intermediate result.
 *
 * @param reducer The accumulator function called on each notified action.
 * @param initialState The initial accumulation value.
 * @param equals Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 */
const createActionReducer = (reducer, initialState, options) => createLiftedStreamable(obs => create(observer => {
    const acc = initialState();
    pipe(obs, scan(reducer, returns(acc)), concatWith(mergeT, pipe([acc], toObservable())), distinctUntilChanged(options), sinkInto$1(observer));
}));
/**
 * Returns a new `StateStoreLike` instance that stores state which can
 * be updated by notifying the instance with a `StateUpdater` that computes a
 * new state based upon the previous state.
 *
 * @param initialState The initial accumulation value.
 * @param equals Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 */
const createStateStore = (initialState, options) => createActionReducer(updateReducer, initialState, options);

export { createActionReducer, createStateStore, sinkInto, stream };
