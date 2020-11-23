import { updaterReducer, pipe, identity, compose } from './functions.mjs';
import './option.mjs';
import { bindDisposables } from './disposable.mjs';
import './readonlyArray.mjs';
import './enumerable.mjs';
import './runnable.mjs';
import './queues.mjs';
import './scheduler.mjs';
import { using, zipWithLatestFrom, onNotify, subscribe } from './observable.mjs';
import './env.mjs';
import { dispatchTo } from './dispatcher.mjs';
import { createActionReducer, createStreamable, stream, mapReq, map as map$1 } from './streamable.mjs';

/**
 * Returns a new `StateStoreLike` instance that stores state which can
 * be updated by notifying the instance with a `StateUpdater` that computes a
 * new state based upon the previous state.
 *
 * @param initialState The initial accumulation value.
 * @param equals Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 */
const createStateStore = (initialState, options) => createActionReducer(updaterReducer, initialState, options);
/**
 * Converts an `StreamableLike<T, T>` to an `StateStoreLike<T>`.
 *
 * @param initialState Factory function to generate the initial state.
 * @param equals Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 */
const toStateStore = () => streamable => createStreamable(updates => using(scheduler => {
    const stream$1 = pipe(streamable, stream(scheduler));
    const updatesSubscription = pipe(updates, zipWithLatestFrom(stream$1, (updateState, prev) => updateState(prev)), onNotify(dispatchTo(stream$1)), subscribe(scheduler));
    bindDisposables(updatesSubscription, stream$1);
    return stream$1;
}, identity));
const requestMapper = (parse, serialize) => (stateUpdater) => oldStateTA => {
    const oldStateTB = parse(oldStateTA);
    const newStateTB = stateUpdater(oldStateTB);
    return oldStateTB === newStateTB ? oldStateTA : serialize(newStateTB);
};
const map = (parse, serialize) => compose(mapReq(requestMapper(parse, serialize)), map$1(parse));

export { createStateStore, map, toStateStore };
