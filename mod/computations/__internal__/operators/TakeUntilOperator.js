/// <reference types="./TakeUntilOperator.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { bindMethod, none, pipe, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import { DisposableLike_dispose } from "../../../utils.js";
import DelegatingLiftedOperatorMixin, { DelegatingLiftedOperatorLike_delegate, DelegatingLiftedOperatorLike_onCompleted, } from "../../__mixins__/DelegatingLiftedOperatorMixin.js";
import { LiftedOperatorLike_complete, LiftedOperatorLike_subscription, } from "../LiftedSource.js";
export const create = /*@__PURE__*/ (() => {
    const TakeUntilOperator_notifierSubscription = Symbol("TakeUntilOperator_notifierSubscription");
    return mixInstanceFactory(include(DelegatingLiftedOperatorMixin()), function TakeUntilOperator(delegate, notifier, addEventListener) {
        init(DelegatingLiftedOperatorMixin(), this, delegate);
        const subscription = this[LiftedOperatorLike_subscription];
        this[TakeUntilOperator_notifierSubscription] = pipe(notifier, addEventListener(subscription, bindMethod(this, LiftedOperatorLike_complete)), Disposable.addTo(subscription));
        return this;
    }, props({
        [TakeUntilOperator_notifierSubscription]: none,
    }), proto({
        [DelegatingLiftedOperatorLike_onCompleted]() {
            this[TakeUntilOperator_notifierSubscription][DisposableLike_dispose]();
            this[DelegatingLiftedOperatorLike_delegate][LiftedOperatorLike_complete]();
        },
    }));
})();
