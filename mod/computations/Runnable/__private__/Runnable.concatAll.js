/// <reference types="./Runnable.concatAll.d.ts" />

import { ComputationLike_isPure, RunnableLike_eval, } from "../../../computations.js";
import { newInstance } from "../../../functions.js";
import AbstractSink, { AbstractSink_delegate, } from "../../../utils/Sink/__internal__/AbstractSink.js";
import DelegatingNonCompletingSink, { DelegatingNonCompletingSink_inner, } from "../../../utils/Sink/__internal__/DelegatingNonCompletingSink.js";
import { SinkLike_complete, SinkLike_isComplete, SinkLike_next, } from "../../../utils.js";
import Runnable_lift from "./Runnable.lift.js";
class ConcatAllSink extends AbstractSink {
    [SinkLike_next](next) {
        const sink = this[AbstractSink_delegate];
        next[RunnableLike_eval](sink);
        if (sink[DelegatingNonCompletingSink_inner][SinkLike_isComplete]) {
            this[SinkLike_complete]();
        }
    }
    [SinkLike_complete]() {
        super[SinkLike_complete]();
        this[AbstractSink_delegate][DelegatingNonCompletingSink_inner][SinkLike_complete]();
    }
}
const Runnable_concatAll = ((options) => Runnable_lift((sink) => {
    const innerSink = newInstance(DelegatingNonCompletingSink, sink);
    return newInstance((ConcatAllSink), innerSink);
}, options?.innerType?.[ComputationLike_isPure] ?? true));
export default Runnable_concatAll;
