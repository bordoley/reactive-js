/// <reference types="./AsyncEnumerable.lift.d.ts" />

import { LiftedAsyncEnumerable_operators, LiftedAsyncEnumerable_src, } from "../../../__internal__/symbols.js";
import { newInstance, pipeUnsafe } from "../../../functions.js";
import { StreamableLike_isEnumerable, StreamableLike_isInteractive, StreamableLike_isRunnable, StreamableLike_stream, } from "../../../streaming.js";
class LiftedAsyncEnumerable {
    [LiftedAsyncEnumerable_src];
    [LiftedAsyncEnumerable_operators];
    [StreamableLike_isEnumerable];
    [StreamableLike_isInteractive] = true;
    [StreamableLike_isRunnable];
    constructor(src, operators, isEnumerable, isRunnable) {
        this[LiftedAsyncEnumerable_src] = src;
        this[LiftedAsyncEnumerable_operators] = operators;
        this[StreamableLike_isEnumerable] = isEnumerable;
        this[StreamableLike_isRunnable] = isRunnable;
    }
    [StreamableLike_stream](scheduler, options) {
        const src = this[LiftedAsyncEnumerable_src][StreamableLike_stream](scheduler, options);
        return pipeUnsafe(src, ...this[LiftedAsyncEnumerable_operators]);
    }
}
const AsyncEnumerable_lift = (isEnumerable, isRunnable) => (operator) => enumerable => {
    const src = enumerable instanceof LiftedAsyncEnumerable
        ? enumerable[LiftedAsyncEnumerable_src]
        : enumerable;
    const allFunctions = enumerable instanceof LiftedAsyncEnumerable
        ? [...enumerable[LiftedAsyncEnumerable_operators], operator]
        : [operator];
    const liftedIsEnumerable = isEnumerable && enumerable[StreamableLike_isEnumerable];
    const liftIsRunnable = isRunnable && enumerable[StreamableLike_isRunnable];
    return newInstance(LiftedAsyncEnumerable, src, allFunctions, liftedIsEnumerable, liftIsRunnable);
};
export default AsyncEnumerable_lift;
