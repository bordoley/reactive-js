/// <reference types="./Observable.subscribeWithConfig.d.ts" />

import { createInstanceFactory, include, init, mix, } from "../../../__internal__/mixins.js";
import { ObservableLike_observe, } from "../../../concurrent.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import { DisposableContainerLike_add, } from "../../../utils.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import decorateNotifyWithObserverStateAssert from "../../__mixins__/decorateNotifyWithObserverStateAssert.js";
const createObserver = /*@__PURE__*/ (() => {
    return createInstanceFactory(decorateNotifyWithObserverStateAssert(mix(include(DisposableMixin, ObserverMixin()), function SubscribeObserver(instance, scheduler, config) {
        init(DisposableMixin, instance);
        init(ObserverMixin(), instance, scheduler, config);
        return instance;
    })));
})();
const Observable_subscribeWithConfig = (scheduler, config) => (observable) => {
    const observer = createObserver(scheduler, config);
    scheduler[DisposableContainerLike_add](observer);
    observable[ObservableLike_observe](observer);
    return observer;
};
export default Observable_subscribeWithConfig;
