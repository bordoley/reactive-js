/// <reference types="./AsyncEnumerable.lift.d.ts" />
import { pipe, pipeUnsafe, newInstance } from '../../../functions.mjs';
import { InteractiveContainerLike_interact } from '../../../ix.mjs';
import { StreamableLike_stream } from '../../../streaming.mjs';
import Streamable_stream from '../../../streaming/__internal__/Streamable/Streamable.stream.mjs';

class LiftedAsyncEnumerable {
    constructor(src, operators) {
        this.src = src;
        this.operators = operators;
    }
    [InteractiveContainerLike_interact](scheduler) {
        return pipe(this, Streamable_stream(scheduler));
    }
    [StreamableLike_stream](scheduler, options) {
        const src = pipe(this.src, Streamable_stream(scheduler, options));
        return pipeUnsafe(src, ...this.operators);
    }
}
const AsyncEnumerable_lift = (operator) => enumerable => {
    const src = enumerable instanceof LiftedAsyncEnumerable ? enumerable.src : enumerable;
    const allFunctions = enumerable instanceof LiftedAsyncEnumerable
        ? [...enumerable.operators, operator]
        : [operator];
    return newInstance(LiftedAsyncEnumerable, src, allFunctions);
};

export { AsyncEnumerable_lift as default };
