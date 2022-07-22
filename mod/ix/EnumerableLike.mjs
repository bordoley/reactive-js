/// <reference types="./EnumerableLike.d.ts" />
import { interactive } from '../__internal__/containers/StatefulContainerLike.mjs';
import { none } from '../util/Option.mjs';
import { pipeUnsafe, newInstance } from '../util/functions.mjs';
import { InteractiveContainerLike_interact } from './InteractiveContainerLike.mjs';

const enumerate = () => (enumerable) => enumerable[InteractiveContainerLike_interact](none);
class LiftedEnumerable {
    constructor(src, operators) {
        this.src = src;
        this.operators = operators;
    }
    [InteractiveContainerLike_interact]() {
        return pipeUnsafe(this.src, enumerate(), ...this.operators);
    }
}
const lift = (operator) => (enumerable) => {
    const src = enumerable instanceof LiftedEnumerable ? enumerable.src : enumerable;
    const allFunctions = enumerable instanceof LiftedEnumerable
        ? [...enumerable.operators, operator]
        : [operator];
    return newInstance(LiftedEnumerable, src, allFunctions);
};
const liftT = {
    lift,
    variance: interactive,
};

export { liftT };
