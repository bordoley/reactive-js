/// <reference types="./Runnable.concatAll.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, RunnableLike_eval, } from "../../../computations.js";
import { newInstance } from "../../../functions.js";
import * as Sink from "../../../utils/__internal__/Sink.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import { DelegatingEventListenerLike_delegate } from "../../../utils/__mixins__/DelegatingEventListenerMixin.js";
import DelegatingSinkMixin from "../../../utils/__mixins__/DelegatingSinkMixin.js";
import { DisposableLike_dispose, EventListenerLike_notify, SinkLike_complete, } from "../../../utils.js";
import * as Computation from "../../Computation.js";
const createConcatAllSink = (() => {
    return mixInstanceFactory(include(DelegatingDisposableMixin, DelegatingSinkMixin()), function RunnableConcatAllSink(delegate) {
        init(DelegatingDisposableMixin, this, delegate);
        init(DelegatingSinkMixin(), this, delegate);
        return this;
    }, props(), proto({
        [EventListenerLike_notify](next) {
            const sink = this[DelegatingEventListenerLike_delegate];
            const delegatingSink = Sink.createDelegatingNonCompleting(sink);
            next[RunnableLike_eval](delegatingSink);
            delegatingSink[DisposableLike_dispose]();
        },
    }));
})();
class ConcatAllRunnable {
    s;
    [ComputationLike_isPure];
    [ComputationLike_isDeferred] = true;
    [ComputationLike_isSynchronous] = true;
    constructor(s, innerType) {
        this.s = s;
        this[ComputationLike_isPure] =
            Computation.isPure(s) && Computation.isPure(innerType);
    }
    [RunnableLike_eval](sink) {
        const delegateSink = createConcatAllSink(sink);
        this.s[RunnableLike_eval](delegateSink);
        sink[SinkLike_complete]();
    }
}
const Runnable_concatAll = ((innerType) => (runnable) => newInstance(ConcatAllRunnable, runnable, innerType ?? {}));
export default Runnable_concatAll;
