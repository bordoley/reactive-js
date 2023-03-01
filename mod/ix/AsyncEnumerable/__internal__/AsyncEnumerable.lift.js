/// <reference types="./AsyncEnumerable.lift.d.ts" />

import { newInstance, pipe, pipeUnsafe, } from "../../../functions.js";
import { AsyncEnumerableLike_isEnumerable, AsyncEnumerableLike_isRunnable, InteractiveContainerLike_interact, } from "../../../ix.js";
import { StreamableLike_stream } from "../../../streaming.js";
import Streamable_stream from "../../../streaming/Streamable/__internal__/Streamable.stream.js";
const LiftedAsyncEnumerable_src = Symbol("LiftedAsyncEnumerable_src");
const LiftedAsyncEnumerable_operators = Symbol("LiftedAsyncEnumerable_operators");
class LiftedAsyncEnumerable {
    constructor(src, operators, isEnumerable, isRunnable) {
        this[LiftedAsyncEnumerable_src] = src;
        this[LiftedAsyncEnumerable_operators] = operators;
        this[AsyncEnumerableLike_isEnumerable] = isEnumerable;
        this[AsyncEnumerableLike_isRunnable] = isRunnable;
    }
    [InteractiveContainerLike_interact](scheduler) {
        return pipe(this, Streamable_stream(scheduler));
    }
    [StreamableLike_stream](scheduler, options) {
        const src = pipe(this[LiftedAsyncEnumerable_src], Streamable_stream(scheduler, options));
        return pipeUnsafe(src, ...this[LiftedAsyncEnumerable_operators]);
    }
}
const AsyncEnumerable_lift = (isEnumerable = false, isRunnable = false) => (operator) => enumerable => {
    const src = enumerable instanceof LiftedAsyncEnumerable
        ? enumerable[LiftedAsyncEnumerable_src]
        : enumerable;
    const allFunctions = enumerable instanceof LiftedAsyncEnumerable
        ? [...enumerable[LiftedAsyncEnumerable_operators], operator]
        : [operator];
    const isLiftedEnumerable = isEnumerable && src[AsyncEnumerableLike_isEnumerable];
    const isLiftedRunnable = (isEnumerable || isRunnable) && src[AsyncEnumerableLike_isRunnable];
    return newInstance(LiftedAsyncEnumerable, src, allFunctions, isLiftedEnumerable, isLiftedRunnable);
};
export default AsyncEnumerable_lift;
