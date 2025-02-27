/// <reference types="./Deferable.fromValue.d.ts" />

import { ComputationLike_isPure, DeferableLike_eval, SinkLike_complete, SinkLike_next, } from "../../../computations.js";
import { newInstance } from "../../../functions.js";
class FromValueDeferable {
    v;
    [ComputationLike_isPure] = true;
    constructor(v) {
        this.v = v;
    }
    [DeferableLike_eval](sink) {
        sink[SinkLike_next](this.v);
        sink[SinkLike_complete]();
    }
}
const Deferable_fromValue = () => (v) => newInstance(FromValueDeferable, v);
export default Deferable_fromValue;
