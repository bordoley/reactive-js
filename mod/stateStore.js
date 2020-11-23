'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functions = require('./functions.js');
var disposable = require('./disposable.js');
var observable = require('./observable.js');
var dispatcher = require('./dispatcher.js');
var streamable = require('./streamable.js');

/**
 * Returns a new `StateStoreLike` instance that stores state which can
 * be updated by notifying the instance with a `StateUpdater` that computes a
 * new state based upon the previous state.
 *
 * @param initialState The initial accumulation value.
 * @param equals Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 */
const createStateStore = (initialState, options) => streamable.createActionReducer(functions.updaterReducer, initialState, options);
/**
 * Converts an `StreamableLike<T, T>` to an `StateStoreLike<T>`.
 *
 * @param initialState Factory function to generate the initial state.
 * @param equals Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 */
const toStateStore = () => streamable$1 => streamable.createStreamable(updates => observable.using(scheduler => {
    const stream = functions.pipe(streamable$1, streamable.stream(scheduler));
    const updatesSubscription = functions.pipe(updates, observable.zipWithLatestFrom(stream, (updateState, prev) => updateState(prev)), observable.onNotify(dispatcher.dispatchTo(stream)), observable.subscribe(scheduler));
    disposable.bindDisposables(updatesSubscription, stream);
    return stream;
}, functions.identity));
const requestMapper = (parse, serialize) => (stateUpdater) => oldStateTA => {
    const oldStateTB = parse(oldStateTA);
    const newStateTB = stateUpdater(oldStateTB);
    return oldStateTB === newStateTB ? oldStateTA : serialize(newStateTB);
};
const map = (parse, serialize) => functions.compose(streamable.mapReq(requestMapper(parse, serialize)), streamable.map(parse));

exports.createStateStore = createStateStore;
exports.map = map;
exports.toStateStore = toStateStore;
