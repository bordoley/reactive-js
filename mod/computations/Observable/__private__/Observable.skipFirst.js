/// <reference types="./Observable.skipFirst.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { partial, pipe } from "../../../functions.js";
import { clampPositiveInteger, max } from "../../../math.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, { LiftedObserverLike_delegate, } from "../../../utils/__mixins__/LiftedObserverMixin.js";
import ObserverMixin, { ObserverMixinBaseLike_notify, } from "../../../utils/__mixins__/ObserverMixin.js";
import { QueueableLike_enqueue } from "../../../utils.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
const SkipFirstObserver_count = Symbol("SkipFirstObserver_count");
const createSkipFirstObserver = /*@__PURE__*/ (() => mixInstanceFactory(include(DelegatingDisposableMixin, ObserverMixin(), LiftedObserverMixin()), function SkipFirstObserver(delegate, skipCount) {
    init(DelegatingDisposableMixin, this, delegate);
    init(ObserverMixin(), this, delegate, delegate);
    init(LiftedObserverMixin(), this, delegate);
    this[SkipFirstObserver_count] = clampPositiveInteger(skipCount ?? 1);
    return this;
}, props({
    [SkipFirstObserver_count]: 0,
}), proto({
    [ObserverMixinBaseLike_notify](next) {
        const delegate = this[LiftedObserverLike_delegate];
        this[SkipFirstObserver_count] = max(this[SkipFirstObserver_count] - 1, -1);
        const shouldEmit = this[SkipFirstObserver_count] < 0;
        return ((shouldEmit &&
            (delegate?.[ObserverMixinBaseLike_notify]?.(next) ??
                delegate[QueueableLike_enqueue](next))) ||
            !shouldEmit);
    },
})))();
const Observable_skipFirst = (options) => pipe((createSkipFirstObserver), partial(options?.count), Observable_liftPureDeferred);
export default Observable_skipFirst;
