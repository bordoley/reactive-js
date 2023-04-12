/// <reference types="./AsyncEnumerable.lift.d.ts" />

import { __LiftedLike_operators, __LiftedLike_source, } from "../../../__internal__/symbols.js";
import { newInstance, pipeUnsafe } from "../../../functions.js";
import { StreamableLike_isEnumerable, StreamableLike_isInteractive, StreamableLike_isRunnable, StreamableLike_stream, } from "../../../streaming.js";
class LiftedAsyncEnumerable {
    [__LiftedLike_source];
    [__LiftedLike_operators];
    [StreamableLike_isEnumerable];
    [StreamableLike_isInteractive] = true;
    [StreamableLike_isRunnable];
    constructor(src, operators, isEnumerable, isRunnable) {
        this[__LiftedLike_source] = src;
        this[__LiftedLike_operators] = operators;
        this[StreamableLike_isEnumerable] = isEnumerable;
        this[StreamableLike_isRunnable] = isRunnable;
    }
    [StreamableLike_stream](scheduler, options) {
        const src = this[__LiftedLike_source][StreamableLike_stream](scheduler, options);
        return pipeUnsafe(src, ...this[__LiftedLike_operators]);
    }
}
const AsyncEnumerable_lift = (isEnumerable, isRunnable) => (operator) => enumerable => {
    const src = enumerable[__LiftedLike_source] ?? enumerable;
    const allFunctions = [
        ...(enumerable[__LiftedLike_operators] ?? []),
        operator,
    ];
    const liftedIsEnumerable = isEnumerable && enumerable[StreamableLike_isEnumerable];
    const liftIsRunnable = isRunnable && enumerable[StreamableLike_isRunnable];
    return newInstance(LiftedAsyncEnumerable, src, allFunctions, liftedIsEnumerable, liftIsRunnable);
};
export default AsyncEnumerable_lift;
