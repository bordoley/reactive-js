/// <reference types="./Deferable.concatAll.d.ts" />

import { DeferableLike_eval, SinkLike_complete, SinkLike_isComplete, SinkLike_next, } from "../../../computations.js";
import { newInstance, returns } from "../../../functions.js";
import AbstractSink, { AbstractSink_delegate, } from "../../Sink/__internal__/AbstractSink.js";
import DelegatingNonCompletingSink, { DelegatingNonCompletingSink_inner, } from "../../Sink/__internal__/DelegatingNonCompletingSink.js";
import Deferable_lift from "./Deferable.lift.js";
class ConcatAllSink extends AbstractSink {
    [SinkLike_next](next) {
        const sink = this[AbstractSink_delegate];
        next[DeferableLike_eval](sink);
        if (sink[DelegatingNonCompletingSink_inner][SinkLike_isComplete]) {
            this[SinkLike_complete]();
        }
    }
    [SinkLike_complete]() {
        super[SinkLike_complete]();
        this[AbstractSink_delegate][DelegatingNonCompletingSink_inner][SinkLike_complete]();
    }
}
const Deferable_concatAll = (() => returns(Deferable_lift((sink) => {
    const innerSink = newInstance(DelegatingNonCompletingSink, sink);
    return newInstance((ConcatAllSink), innerSink);
})))();
export default Deferable_concatAll;
