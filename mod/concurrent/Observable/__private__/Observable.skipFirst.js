/// <reference types="./Observable.skipFirst.d.ts" />

import { clampPositiveInteger, max } from "../../../__internal__/math.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { SinkLike_notify } from "../../../events.js";
import { partial, pipe } from "../../../functions.js";
import DelegatingDisposableMixin, { DelegatingDisposableLike_delegate, } from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import decorateNotifyWithObserverStateAssert from "../../__mixins__/decorateNotifyWithObserverStateAssert.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
const SkipFirstObserver_count = Symbol("SkipFirstObserver_count");
const Observer_createSkipFirstObserver = /*@__PURE__*/ (() => createInstanceFactory(decorateNotifyWithObserverStateAssert(mix(include(DelegatingDisposableMixin(), ObserverMixin()), function SkipFirstObserver(instance, delegate, skipCount) {
    init(DelegatingDisposableMixin(), instance, delegate);
    init(ObserverMixin(), instance, delegate, delegate);
    instance[SkipFirstObserver_count] = clampPositiveInteger(skipCount ?? 1);
    return instance;
}, props({
    [SkipFirstObserver_count]: 0,
}), {
    [SinkLike_notify](next) {
        this[SkipFirstObserver_count] = max(this[SkipFirstObserver_count] - 1, -1);
        if (this[SkipFirstObserver_count] < 0) {
            this[DelegatingDisposableLike_delegate][SinkLike_notify](next);
        }
    },
}))))();
const Observable_skipFirst = (options = {}) => pipe(Observer_createSkipFirstObserver, partial(clampPositiveInteger(options.count ?? 1)), Observable_liftPureDeferred);
export default Observable_skipFirst;
