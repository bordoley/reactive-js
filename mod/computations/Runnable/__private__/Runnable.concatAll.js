/// <reference types="./Runnable.concatAll.d.ts" />

import { include, init, mixInstanceFactory, props, proto, unsafeCast, } from "../../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, RunnableLike_eval, } from "../../../computations.js";
import { newInstance, none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Sink from "../../../utils/__internal__/Sink.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import { DisposableLike_dispose, EventListenerLike_notify, SinkLike_complete, SinkLike_isCompleted, } from "../../../utils.js";
import * as Computation from "../../Computation.js";
const createConcatAllSink = (() => {
    const RunnableConcatAllSink_delegate = Symbol("RunnableConcatAllSink_delegate");
    return mixInstanceFactory(include(DelegatingDisposableMixin), function RunnableConcatAllSink(delegate) {
        init(DelegatingDisposableMixin, this, delegate);
        return this;
    }, props({
        [RunnableConcatAllSink_delegate]: none,
    }), proto({
        get [SinkLike_isCompleted]() {
            unsafeCast(this);
            return this[RunnableConcatAllSink_delegate][SinkLike_isCompleted];
        },
        [EventListenerLike_notify](next) {
            const sink = this[RunnableConcatAllSink_delegate];
            const delegatingSink = pipe(Sink.createDelegatingNotifyOnlyNonCompletingNonDisposing(sink), Disposable.addTo(sink));
            next[RunnableLike_eval](sink);
            delegatingSink[DisposableLike_dispose]();
        },
        [SinkLike_complete]() {
            this[RunnableConcatAllSink_delegate][SinkLike_complete]();
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
