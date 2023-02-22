/// <reference types="./Enumerable.lift.d.ts" />

import { newInstance, pipeUnsafe } from "../../../functions.js";
import { InteractiveContainerLike_interact, } from "../../../ix.js";
import enumerate from "./Enumerable.enumerate.js";
const LiftedEnumerable_src = Symbol("LiftedEnumerable_src");
const LiftedEnumerable_operators = Symbol("LiftedEnumerable_src");
class LiftedEnumerable {
    constructor(src, operators) {
        this[LiftedEnumerable_src] = src;
        this[LiftedEnumerable_operators] = operators;
    }
    [InteractiveContainerLike_interact]() {
        return pipeUnsafe(this[LiftedEnumerable_src], enumerate(), ...this[LiftedEnumerable_operators]);
    }
}
const Enumerable_lift = (operator) => (enumerable) => {
    const src = enumerable instanceof LiftedEnumerable
        ? enumerable[LiftedEnumerable_src]
        : enumerable;
    const allFunctions = enumerable instanceof LiftedEnumerable
        ? [...enumerable[LiftedEnumerable_operators], operator]
        : [operator];
    return newInstance(LiftedEnumerable, src, allFunctions);
};
export default Enumerable_lift;
