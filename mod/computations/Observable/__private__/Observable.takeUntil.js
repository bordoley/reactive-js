/// <reference types="./Observable.takeUntil.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { bindMethod, none, partial, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import { DisposableLike_dispose, } from "../../../utils.js";
import { LiftedOperatorLike_complete, LiftedOperatorLike_subscription, } from "../../__internal__/LiftedSource.js";
import DelegatingLiftedOperatorMixin, { DelegatingLiftedOperatorLike_onCompleted, } from "../../__mixins__/DelegatingLiftedOperatorMixin.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_lift from "./Observable.lift.js";
import Observable_subscribe from "./Observable.subscribe.js";
export const createTakeUntilOperator = /*@__PURE__*/ (() => {
    const TakeUntilOperator_otherSubscription = Symbol("TakeUntilOperator_otherSubscription");
    return mixInstanceFactory(include(DelegatingLiftedOperatorMixin()), function TakeUntilOperator(delegate, notifier) {
        init(DelegatingLiftedOperatorMixin(), this, delegate);
        const scheduler = this[LiftedOperatorLike_subscription];
        this[TakeUntilOperator_otherSubscription] = pipe(notifier, Observable_forEach(bindMethod(this, LiftedOperatorLike_complete)), Observable_subscribe({ scheduler }), Disposable.addTo(scheduler));
        return this;
    }, props({
        [TakeUntilOperator_otherSubscription]: none,
    }), proto({
        [DelegatingLiftedOperatorLike_onCompleted]() {
            this[TakeUntilOperator_otherSubscription][DisposableLike_dispose]();
        },
    }));
})();
const Observable_takeUntil = ((notifier) => pipe(createTakeUntilOperator, partial(notifier), Observable_lift()));
export default Observable_takeUntil;
