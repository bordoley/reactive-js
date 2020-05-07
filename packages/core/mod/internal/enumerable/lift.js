import { pipe } from "../../functions.js";
class LiftedEnumerableLike {
    constructor(src, operators) {
        this.src = src;
        this.operators = operators;
    }
    enumerate() {
        const src = this.src.enumerate();
        return pipe(src, ...this.operators);
    }
}
export const lift = (operator) => enumerable => {
    const src = enumerable instanceof LiftedEnumerableLike ? enumerable.src : enumerable;
    const allOperators = enumerable instanceof LiftedEnumerableLike
        ? [...enumerable.operators, operator]
        : [operator];
    return new LiftedEnumerableLike(src, allOperators);
};
