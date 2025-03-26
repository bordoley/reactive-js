/// <reference types="./Broadcaster.takeUntil.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { bindMethod, none, partial, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import { DisposableLike_dispose, } from "../../../utils.js";
import { LiftedOperatorLike_complete, LiftedOperatorLike_subscription, } from "../../__internal__/LiftedSource.js";
import DelegatingLiftedOperatorMixin, { DelegatingLiftedOperatorLike_onCompleted, } from "../../__mixins__/DelegatingLiftedOperatorMixin.js";
import Broadcaster_addEventHandler from "./Broadcaster.addEventHandler.js";
import Broadcaster_lift from "./Broadcaster.lift.js";
export const createTakeUntilOperator = /*@__PURE__*/ (() => {
    const TakeUntilOperator_otherSubscription = Symbol("TakeUntilOperator_otherSubscription");
    return mixInstanceFactory(include(DelegatingLiftedOperatorMixin()), function TakeUntilOperator(delegate, notifier) {
        init(DelegatingLiftedOperatorMixin(), this, delegate);
        const subscription = this[LiftedOperatorLike_subscription];
        this[TakeUntilOperator_otherSubscription] = pipe(notifier, Broadcaster_addEventHandler(bindMethod(this, LiftedOperatorLike_complete)), Disposable.addTo(subscription));
        return this;
    }, props({
        [TakeUntilOperator_otherSubscription]: none,
    }), proto({
        [DelegatingLiftedOperatorLike_onCompleted]() {
            this[TakeUntilOperator_otherSubscription][DisposableLike_dispose]();
        },
    }));
})();
const Broadcaster_takeUntil = ((notifier) => pipe(createTakeUntilOperator, partial(notifier), (Broadcaster_lift)));
export default Broadcaster_takeUntil;
