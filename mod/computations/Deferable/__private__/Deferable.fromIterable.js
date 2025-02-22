/// <reference types="./Deferable.fromIterable.d.ts" />

import { DeferableLike_eval, SinkLike_complete, SinkLike_isComplete, SinkLike_next, } from "../../../computations.js";
import { newInstance } from "../../../functions.js";
class FromIterableDeferable {
    i;
    constructor(i) {
        this.i = i;
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
const Deferable_fromIterable = () => (iterable) => newInstance(FromIterableDeferable, iterable);
export default Deferable_fromIterable;
