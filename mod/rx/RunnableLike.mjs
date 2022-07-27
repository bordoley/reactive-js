/// <reference types="./RunnableLike.d.ts" />
import { prototype } from '../__internal__/util/DelegatingDisposable.mjs';
import { Object_properties, Object_init, init, mixWith, createObjectFactory } from '../__internal__/util/Object.mjs';
import { mapPrototype } from '../__internal__/util/Sink.mjs';
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
    const createInstance = pipe({
        [Object_properties]: {},
        [Object_init](delegate, mapper) {
            init(prototype, this, delegate);
            init(mapPrototype, this, delegate, mapper);
        },
    }, mixWith(prototype, mapPrototype), createObjectFactory());
    return (mapper) => {
        const operator = (delegate) => createInstance(delegate, mapper);
        return lift(operator);
    };
})();

export { map };
