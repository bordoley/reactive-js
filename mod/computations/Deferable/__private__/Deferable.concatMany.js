/// <reference types="./Deferable.concatMany.d.ts" />

import { DeferableLike_eval, SinkLike_complete, SinkLike_isComplete, } from "../../../computations.js";
import { newInstance } from "../../../functions.js";
import DelegatingNonCompletingSink from "../../Sink/__internal__/DelegatingNonCompletingSink.js";
class ConcatManyDeferable {
    s;
    constructor(s) {
        this.s = s;
    }
    [DeferableLike_eval](sink) {
        const delegatingSink = newInstance(DelegatingNonCompletingSink, sink);
        for (const src of this.s) {
            src[DeferableLike_eval](delegatingSink);
            if (sink[SinkLike_isComplete]) {
                break;
            }
        }
        sink[SinkLike_complete]();
    }
}
const Deferable_concatMany = (computations) => newInstance((ConcatManyDeferable), computations);
export default Deferable_concatMany;
