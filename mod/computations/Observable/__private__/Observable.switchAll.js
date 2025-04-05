/// <reference types="./Observable.switchAll.d.ts" />

import { include, init, mixInstanceFactory, } from "../../../__internal__/mixins.js";
import { ComputationLike_isPure, ComputationLike_isSynchronous, EventSourceLike_subscribe, } from "../../../computations.js";
import * as Observer from "../../../utils/__internal__/Observer.js";
import DelegatingSchedulerMixin from "../../../utils/__mixins__/DelegatingSchedulerMixin.js";
import UnscheduledObserverMixin from "../../../utils/__mixins__/UnscheduledObserverMixin.js";
import * as Computation from "../../Computation.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
import SwitchAllConsumerMixin from "../../__mixins__/SwitchAllConsumerMixin.js";
export const createSwitchAllObserver = 
/*@__PURE__*/
(() => mixInstanceFactory(include(SwitchAllConsumerMixin(), DelegatingSchedulerMixin, UnscheduledObserverMixin()), function SwitchAllObserver(delegate) {
    init(SwitchAllConsumerMixin(), this, delegate, Observer.createDelegatingNonCompleting);
    init(DelegatingSchedulerMixin, this, delegate);
    init(UnscheduledObserverMixin(), this);
    return this;
}))();
const Observable_switchAll = ((innerType) => (obs) => DeferredEventSource.create((observer) => {
    const delegate = createSwitchAllObserver(observer);
    obs[EventSourceLike_subscribe](delegate);
}, {
    [ComputationLike_isPure]: Computation.isPure(obs) && Computation.isPure(innerType ?? {}),
    [ComputationLike_isSynchronous]: Computation.isSynchronous(obs) &&
        Computation.isSynchronous(innerType ?? {}),
}));
export default Observable_switchAll;
