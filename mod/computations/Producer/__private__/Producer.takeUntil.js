/// <reference types="./Producer.takeUntil.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { bindMethod, none, partial, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import { DisposableLike_dispose, } from "../../../utils.js";
import { LiftedOperatorLike_complete, LiftedOperatorLike_subscription, } from "../../__internal__/LiftedSource.js";
import DelegatingLiftedOperatorMixin, { DelegatingLiftedOperatorLike_onCompleted, } from "../../__mixins__/DelegatingLiftedOperatorMixin.js";
import Producer_forEach from "./Producer.forEach.js";
import Producer_lift from "./Producer.lift.js";
import Producer_subscribe from "./Producer.subscribe.js";
export const createTakeUntilOperator = /*@__PURE__*/ (() => {
    const TakeUntilOperator_otherSubscription = Symbol("TakeUntilOperator_otherSubscription");
    return mixInstanceFactory(include(DelegatingLiftedOperatorMixin()), function TakeUntilOperator(delegate, notifier) {
        init(DelegatingLiftedOperatorMixin(), this, delegate);
        const subscription = this[LiftedOperatorLike_subscription];
        this[TakeUntilOperator_otherSubscription] = pipe(notifier, Producer_forEach(bindMethod(this, LiftedOperatorLike_complete)), Producer_subscribe(), Disposable.addTo(subscription));
        return this;
    }, props({
        [TakeUntilOperator_otherSubscription]: none,
    }), proto({
        [DelegatingLiftedOperatorLike_onCompleted]() {
            this[TakeUntilOperator_otherSubscription][DisposableLike_dispose]();
        },
    }));
})();
const Producer_takeUntil = ((notifier) => pipe(createTakeUntilOperator, partial(notifier), Producer_lift()));
export default Producer_takeUntil;
