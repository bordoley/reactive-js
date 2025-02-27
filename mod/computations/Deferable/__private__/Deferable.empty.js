/// <reference types="./Deferable.empty.d.ts" />

import { ComputationLike_isPure, DeferableLike_eval, SinkLike_complete, } from "../../../computations.js";
import { newInstance, returns } from "../../../functions.js";
class EmptyDeferable {
    [ComputationLike_isPure] = true;
    [DeferableLike_eval](sink) {
        sink[SinkLike_complete]();
    }
}
const Deferable_empty = /*@__PURE__*/ (() => returns(newInstance(EmptyDeferable)))();
export default Deferable_empty;
