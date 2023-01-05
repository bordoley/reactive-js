/// <reference types="./AsyncEnumerableLike.lift.d.ts" />
import { pipe, pipeUnsafe, newInstance } from '../../../functions.mjs';
import { InteractiveContainerLike_interact } from '../../../ix.mjs';
import { StreamableLike_stream } from '../../../streaming.mjs';
import { stream } from '../../../streaming/StreamableLike.mjs';

class LiftedAsyncEnumerable {
    constructor(src, operators) {
        this.src = src;
        this.operators = operators;
    }
    [InteractiveContainerLike_interact](scheduler) {
        return pipe(this, stream(scheduler));
    }
    [StreamableLike_stream](scheduler, options) {
        const src = pipe(this.src, stream(scheduler, options));
        return pipeUnsafe(src, ...this.operators);
    }
}
const AsyncEnumerableLike__lift = (operator) => enumerable => {
    const src = enumerable instanceof LiftedAsyncEnumerable ? enumerable.src : enumerable;
    const allFunctions = enumerable instanceof LiftedAsyncEnumerable
        ? [...enumerable.operators, operator]
        : [operator];
    return newInstance(LiftedAsyncEnumerable, src, allFunctions);
};

export { AsyncEnumerableLike__lift as default };
