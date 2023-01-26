/// <reference types="./Enumerable.lift.d.ts" />
import { pipeUnsafe, newInstance } from '../../../functions.mjs';
import { InteractiveContainerLike_interact } from '../../../ix.mjs';
import Enumerable$enumerate from './Enumerable.enumerate.mjs';

const Enumerable$lift = 
/*@__PURE__*/ (() => {
    class LiftedEnumerable {
        constructor(src, operators) {
            this.src = src;
            this.operators = operators;
        }
        [InteractiveContainerLike_interact]() {
            return pipeUnsafe(this.src, Enumerable$enumerate(), ...this.operators);
        }
    }
    return (operator) => (enumerable) => {
        const src = enumerable instanceof LiftedEnumerable
            ? enumerable.src
            : enumerable;
        const allFunctions = enumerable instanceof LiftedEnumerable
            ? [...enumerable.operators, operator]
            : [operator];
        return newInstance(LiftedEnumerable, src, allFunctions);
    };
})();

export { Enumerable$lift as default };
