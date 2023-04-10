/// <reference types="./AsyncEnumerable.lift.d.ts" />

import { __Lifted_operators, __Lifted_source, } from "../../../__internal__/symbols.js";
import { newInstance, pipeUnsafe } from "../../../functions.js";
import { StreamableLike_isEnumerable, StreamableLike_isInteractive, StreamableLike_isRunnable, StreamableLike_stream, } from "../../../streaming.js";
class LiftedAsyncEnumerable {
    [__Lifted_source];
    [__Lifted_operators];
    [StreamableLike_isEnumerable];
    [StreamableLike_isInteractive] = true;
    [StreamableLike_isRunnable];
    constructor(src, operators, isEnumerable, isRunnable) {
        this[__Lifted_source] = src;
        this[__Lifted_operators] = operators;
        this[StreamableLike_isEnumerable] = isEnumerable;
        this[StreamableLike_isRunnable] = isRunnable;
    }
    [StreamableLike_stream](scheduler, options) {
        const src = this[__Lifted_source][StreamableLike_stream](scheduler, options);
        return pipeUnsafe(src, ...this[__Lifted_operators]);
    }
}
const AsyncEnumerable_lift = (isEnumerable, isRunnable) => (operator) => enumerable => {
    const src = enumerable[__Lifted_source] ?? enumerable;
    const allFunctions = [
        ...(enumerable[__Lifted_operators] ?? []),
        operator,
    ];
    const liftedIsEnumerable = isEnumerable && enumerable[StreamableLike_isEnumerable];
    const liftIsRunnable = isRunnable && enumerable[StreamableLike_isRunnable];
    return newInstance(LiftedAsyncEnumerable, src, allFunctions, liftedIsEnumerable, liftIsRunnable);
};
export default AsyncEnumerable_lift;
