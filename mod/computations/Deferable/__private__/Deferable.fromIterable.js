/// <reference types="./Deferable.fromIterable.d.ts" />

import { ComputationLike_isPure, DeferableLike_eval, SinkLike_complete, SinkLike_isComplete, SinkLike_next, } from "../../../computations.js";
import { newInstance } from "../../../functions.js";
class FromIterableDeferable {
    i;
    [ComputationLike_isPure];
    constructor(i) {
        this.i = i;
        this[ComputationLike_isPure] = i[ComputationLike_isPure] ?? true;
    }
    [DeferableLike_eval](sink) {
        for (const v of this.i) {
            if (sink[SinkLike_isComplete]) {
                break;
            }
            sink[SinkLike_next](v);
        }
        sink[SinkLike_complete]();
    }
}
const Deferable_fromIterable = (() => (iterable) => newInstance((FromIterableDeferable), iterable));
export default Deferable_fromIterable;
