/// <reference types="./RunnableLike.d.ts" />
import { createObjectFactory } from '../__internal__/util/Object.mjs';
import { mapSinkMixin } from '../__internal__/util/SinkLikeMixin.mjs';
import { pipe, pipeUnsafe, newInstance } from '../functions.mjs';
import { ReactiveContainerLike_sinkInto } from '../rx.mjs';
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
const map = /*@__PURE__*/ (() => {
    const typedMapSinkMixin = mapSinkMixin();
    const createInstance = pipe(typedMapSinkMixin, createObjectFactory());
    return (mapper) => {
        const operator = (delegate) => createInstance(delegate, mapper);
        return lift(operator);
    };
})();

export { map };
