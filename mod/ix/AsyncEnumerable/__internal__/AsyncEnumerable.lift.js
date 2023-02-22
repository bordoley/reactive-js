/// <reference types="./AsyncEnumerable.lift.d.ts" />

var _a, _b;
import { newInstance, pipe, pipeUnsafe, } from "../../../functions.js";
import { AsyncEnumerableLike_isEnumerable, AsyncEnumerableLike_isRunnable, InteractiveContainerLike_interact, } from "../../../ix.js";
import { StreamableLike_stream } from "../../../streaming.js";
import Streamable_stream from "../../../streaming/Streamable/__internal__/Streamable.stream.js";
const LiftedAsyncEnumerable_src = Symbol("LiftedAsyncEnumerable_src");
const LiftedAsyncEnumerable_operators = Symbol("LiftedAsyncEnumerable_operators");
class LiftedAsyncEnumerable {
    constructor(src, operators) {
        this[_a] = false;
        this[_b] = false;
        this[LiftedAsyncEnumerable_src] = src;
        this[LiftedAsyncEnumerable_operators] = operators;
    }
    [(_a = AsyncEnumerableLike_isEnumerable, _b = AsyncEnumerableLike_isRunnable, InteractiveContainerLike_interact)](scheduler) {
        return pipe(this, Streamable_stream(scheduler));
    }
    [StreamableLike_stream](scheduler, options) {
        const src = pipe(this[LiftedAsyncEnumerable_src], Streamable_stream(scheduler, options));
        return pipeUnsafe(src, ...this[LiftedAsyncEnumerable_operators]);
    }
}
const AsyncEnumerable_lift = (operator) => enumerable => {
    const src = enumerable instanceof LiftedAsyncEnumerable
        ? enumerable[LiftedAsyncEnumerable_src]
        : enumerable;
    const allFunctions = enumerable instanceof LiftedAsyncEnumerable
        ? [...enumerable[LiftedAsyncEnumerable_operators], operator]
        : [operator];
    return newInstance(LiftedAsyncEnumerable, src, allFunctions);
};
export default AsyncEnumerable_lift;
