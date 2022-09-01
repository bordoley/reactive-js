/// <reference types="./__internal__StatefulContainerLike.d.ts" />
import '../../containers.mjs';
import { max, pipe, partial, strictEquality } from '../../functions.mjs';
import { MAX_SAFE_INTEGER } from '../__internal__env.mjs';

const interactive = 0;
const reactive = 1;
const lift = ({ lift, }) => lift;
const createBufferOperator = (m) => (operator) => (options = {}) => {
    var _a;
    const maxBufferSize = max((_a = options.maxBufferSize) !== null && _a !== void 0 ? _a : MAX_SAFE_INTEGER, 1);
    return pipe(operator, partial(maxBufferSize), lift(m));
};
const createDecodeWithCharsetOperator = (m) => (operator) => (charset = "utf-8") => pipe(operator, partial(charset), lift(m));
const createDistinctUntilChangedOperator = (m) => (operator) => (options) => {
    const { equality = strictEquality } = options !== null && options !== void 0 ? options : {};
    return pipe(operator, partial(equality), lift(m));
};
const createForEachOperator = (m) => (operator) => (effect) => pipe(operator, partial(effect), lift(m));
const createKeepOperator = (m) => (operator) => (predicate) => pipe(operator, partial(predicate), lift(m));
const createMapOperator = (m) => (operator) => (mapper) => pipe(operator, partial(mapper), lift(m));
const createReduceOperator = (m) => (operator) => (reducer, initialValue) => pipe(operator, partial(reducer, initialValue), lift(m));
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
    return container => pipe(container, containerOperator);
};
const createTakeLastOperator = (m) => (operator) => (options = {}) => {
    const { count = 1 } = options;
    const containerOperator = pipe(operator, partial(count), lift(m));
    return container => pipe(container, containerOperator);
};
const createTakeWhileOperator = (m) => (operator) => (predicate, options = {}) => {
    const { inclusive = false } = options;
    return pipe(operator, partial(predicate, inclusive), lift(m));
};
const createThrowIfEmptyOperator = (m) => (operator) => (factory) => pipe(operator, partial(factory), lift(m));

export { createBufferOperator, createDecodeWithCharsetOperator, createDistinctUntilChangedOperator, createForEachOperator, createKeepOperator, createMapOperator, createReduceOperator, createScanOperator, createSkipFirstOperator, createTakeFirstOperator, createTakeLastOperator, createTakeWhileOperator, createThrowIfEmptyOperator, interactive, reactive };
