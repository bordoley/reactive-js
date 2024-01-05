/// <reference types="./Observable.takeFirst.d.ts" />

import { clampPositiveInteger, max } from "../../../__internal__/math.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { SinkLike_notify } from "../../../events.js";
import { partial, pipe } from "../../../functions.js";
import { DisposableLike_dispose } from "../../../utils.js";
import DelegatingDisposableMixin, { DelegatingDisposableLike_delegate, } from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import decorateNotifyWithObserverStateAssert from "../../__mixins__/decorateNotifyWithObserverStateAssert.js";
import Observable_liftPure from "./Observable.liftPure.js";
const TakeFirstSinkMixin_count = Symbol("TakeFirstSinkMixin_count");
const Observer_createTakeFirstObserver = /*@__PURE__*/ (() => createInstanceFactory(decorateNotifyWithObserverStateAssert(mix(include(DelegatingDisposableMixin(), ObserverMixin()), function TakeFirstObserver(instance, delegate, takeCount) {
    init(DelegatingDisposableMixin(), instance, delegate);
    init(ObserverMixin(), instance, delegate, delegate);
    instance[TakeFirstSinkMixin_count] = clampPositiveInteger(takeCount ?? 1);
    if (takeCount === 0) {
        instance[DisposableLike_dispose]();
    }
    return instance;
}, props({
    [TakeFirstSinkMixin_count]: 0,
}), {
    [SinkLike_notify](next) {
        this[TakeFirstSinkMixin_count] = max(this[TakeFirstSinkMixin_count] - 1, -1);
        this[DelegatingDisposableLike_delegate][SinkLike_notify](next);
        if (this[TakeFirstSinkMixin_count] <= 0) {
            this[DisposableLike_dispose]();
        }
    },
}))))();
const Observable_takeFirst = (options = {}) => pipe(Observer_createTakeFirstObserver, partial(clampPositiveInteger(options.count ?? 1)), Observable_liftPure);
export default Observable_takeFirst;
