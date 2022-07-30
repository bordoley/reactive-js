/// <reference types="./StatefulContainerLikeInternal.d.ts" />
import { max, pipe, partial, strictEquality, none } from '../../functions.mjs';
import '../../util/DisposableLike.mjs';
import { MAX_SAFE_INTEGER } from '../env.mjs';
import { addIgnoringChildErrors, addTo, onComplete, dispose } from '../util/DisposableLikeInternal.mjs';

const interactive = 0;
const reactive = 1;
const lift = ({ lift, }) => lift;
const createBufferOperator = (m) => (operator) => (options = {}) => {
    var _a;
    const maxBufferSize = max((_a = options.maxBufferSize) !== null && _a !== void 0 ? _a : MAX_SAFE_INTEGER, 1);
    return pipe(operator, partial(maxBufferSize), lift(m));
};
const createDistinctUntilChangedOperator = (m) => (operator) => (options) => {
    const { equality = strictEquality } = options !== null && options !== void 0 ? options : {};
    return pipe(operator, partial(equality), lift(m));
};
const createForEachOperator = (m) => (operator) => (effect) => pipe(operator, partial(effect), lift(m));
const createKeepOperator = (m) => (operator) => (predicate) => pipe(operator, partial(predicate), lift(m));
const createMapOperator = (m) => (operator) => (mapper) => pipe(operator, partial(mapper), lift(m));
const createScanOperator = (m) => (operator) => (reducer, initialValue) => pipe(operator, partial(reducer, initialValue), lift(m));
const createSkipFirstOperator = (m) => (operator) => (options = {}) => {
    const { count = 1 } = options;
    const lifted = pipe(operator, partial(count), lift(m));
    return container => (count > 0 ? pipe(container, lifted) : container);
};
const createTakeFirstOperator = (m) => (operator) => (options = {}) => {
    var _a;
    const { count = max((_a = options.count) !== null && _a !== void 0 ? _a : 1, 0) } = options;
    const containerOperator = pipe(operator, partial(count), lift(m));
    return container => count > 0 ? pipe(container, containerOperator) : m.empty();
};
const createTakeLastOperator = (m) => (operator) => (options = {}) => {
    const { count = 1 } = options;
    const containerOperator = pipe(operator, partial(count), lift(m));
    return container => count > 0 ? pipe(container, containerOperator) : m.empty();
};
const createTakeWhileOperator = (m) => (operator) => (predicate, options = {}) => {
    const { inclusive = false } = options;
    return pipe(operator, partial(predicate, inclusive), lift(m));
};
const createThrowIfEmptyOperator = (m) => (operator) => (factory) => pipe((delegate) => {
    const lifted = pipe(delegate, operator, m.variance === interactive
        ? addIgnoringChildErrors(delegate)
        : addTo(delegate));
    const { parent, child } = m.variance === interactive
        ? { parent: lifted, child: delegate }
        : { parent: delegate, child: lifted };
    pipe(child, onComplete(() => {
        let error = none;
        if (lifted.isEmpty) {
            let cause = none;
            try {
                cause = factory();
            }
            catch (e) {
                cause = e;
            }
            error = { cause };
        }
        pipe(parent, dispose(error));
    }));
    return lifted;
}, lift(m));

export { createBufferOperator, createDistinctUntilChangedOperator, createForEachOperator, createKeepOperator, createMapOperator, createScanOperator, createSkipFirstOperator, createTakeFirstOperator, createTakeLastOperator, createTakeWhileOperator, createThrowIfEmptyOperator, interactive, reactive };
