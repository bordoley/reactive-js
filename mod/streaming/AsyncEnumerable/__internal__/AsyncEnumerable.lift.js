/// <reference types="./AsyncEnumerable.lift.d.ts" />

import { newInstance, pipe, pipeUnsafe, } from "../../../functions.js";
import { StreamableLike_stream, } from "../../../streaming.js";
import Streamable_stream from "../../../streaming/Streamable/__internal__/Streamable.stream.js";
const LiftedAsyncEnumerable_src = Symbol("LiftedAsyncEnumerable_src");
const LiftedAsyncEnumerable_operators = Symbol("LiftedAsyncEnumerable_operators");
class LiftedAsyncEnumerable {
    constructor(src, operators) {
        this[LiftedAsyncEnumerable_src] = src;
        this[LiftedAsyncEnumerable_operators] = operators;
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
