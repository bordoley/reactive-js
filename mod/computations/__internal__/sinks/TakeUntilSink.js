/// <reference types="./TakeUntilSink.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { bindMethod, none, pipe, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import { DisposableLike_dispose, SinkLike_complete, } from "../../../utils.js";
import DelegatingLiftedSinkMixin, { DelegatingLiftedSinkLike_delegate, DelegatingLiftedSinkLike_onCompleted, } from "../../__mixins__/DelegatingLiftedSinkMixin.js";
import { LiftedSinkLike_subscription, } from "../LiftedSource.js";
export const create = /*@__PURE__*/ (() => {
    const TakeUntilSink_notifierSubscription = Symbol("TakeUntilSink_notifierSubscription");
    return mixInstanceFactory(include(DelegatingLiftedSinkMixin()), function TakeUntilSink(delegate, notifier, addEventListener) {
        init(DelegatingLiftedSinkMixin(), this, delegate);
        const subscription = this[LiftedSinkLike_subscription];
        this[TakeUntilSink_notifierSubscription] = pipe(notifier, addEventListener(subscription, bindMethod(this, SinkLike_complete)), Disposable.addTo(subscription));
        return this;
    }, props({
        [TakeUntilSink_notifierSubscription]: none,
    }), proto({
        [DelegatingLiftedSinkLike_onCompleted]() {
            this[TakeUntilSink_notifierSubscription][DisposableLike_dispose]();
            this[DelegatingLiftedSinkLike_delegate][SinkLike_complete]();
        },
    }));
})();
