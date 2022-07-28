/// <reference types="./RunnableLike.d.ts" />
import { createObjectFactory } from '../__internal__/util/Object.mjs';
import { keepSinkMixin, mapSinkMixin, onNotifySinkMixin, createSink, scanSinkMixin } from '../__internal__/util/SinkLikeMixin.mjs';
import { pipe, pipeUnsafe, newInstance, isSome, raise } from '../functions.mjs';
import { ReactiveContainerLike_sinkInto } from '../rx.mjs';
import { DisposableLike_error } from '../util.mjs';
import '../util/DisposableLike.mjs';
import { sourceFrom } from './ReactiveContainerLike.mjs';
import { dispose } from '../__internal__/util/DisposableLikeInternal.mjs';

const lift = /*@__PURE__*/ (() => {
    class LiftedRunnable {
        constructor(src, operators) {
            this.src = src;
            this.operators = operators;
        }
        [ReactiveContainerLike_sinkInto](sink) {
            pipe(pipeUnsafe(sink, ...this.operators), sourceFrom(this.src), dispose());
        }
    }
    return (operator) => (runnable) => {
        const src = runnable instanceof LiftedRunnable ? runnable.src : runnable;
        const allFunctions = runnable instanceof LiftedRunnable
            ? [operator, ...runnable.operators]
            : [operator];
        return newInstance(LiftedRunnable, src, allFunctions);
    };
})();
/*
const liftT: Lift<RunnableLike, TReactive> = {
  lift,
  variance: reactive,
};*/
const keep = /*@__PURE__*/ (() => {
    const typedKeepSinkMixin = keepSinkMixin();
    const createInstance = pipe(typedKeepSinkMixin, createObjectFactory());
    return (mapper) => {
        const operator = (delegate) => createInstance(delegate, mapper);
        return lift(operator);
    };
})();
const keepT = { keep };
const map = /*@__PURE__*/ (() => {
    const typedMapSinkMixin = mapSinkMixin();
    const createInstance = pipe(typedMapSinkMixin, createObjectFactory());
    return (mapper) => {
        const operator = (delegate) => createInstance(delegate, mapper);
        return lift(operator);
    };
})();
const mapT = { map };
const onNotify = /*@__PURE__*/ (() => {
    const typedOnNotifySinkMixin = onNotifySinkMixin();
    const createInstance = pipe(typedOnNotifySinkMixin, createObjectFactory());
    return (onNotify) => {
        const operator = (delegate) => createInstance(delegate, onNotify);
        return lift(operator);
    };
})();
const run = () => (runnable) => pipe(createSink(), sourceFrom(runnable), dispose(), ({ [DisposableLike_error]: error }) => {
    if (isSome(error)) {
        raise(error.cause);
    }
});
const scan = /*@__PURE__*/ (() => {
    const typedScanSinkMixin = scanSinkMixin();
    const createInstance = pipe(typedScanSinkMixin, createObjectFactory());
    return (reducer, initialValue) => {
        const operator = (delegate) => createInstance(delegate, reducer, initialValue);
        return lift(operator);
    };
})();
const scanT = { scan };
const toReadonlyArray = () => (runnable) => {
    const result = [];
    pipe(runnable, onNotify(x => result.push(x)), run());
    return result;
};
const toReadonlyArrayT = {
    toReadonlyArray,
};

export { keep, keepT, map, mapT, onNotify, run, scan, scanT, toReadonlyArray, toReadonlyArrayT };
