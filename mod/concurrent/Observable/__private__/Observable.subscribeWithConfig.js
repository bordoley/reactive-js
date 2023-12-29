/// <reference types="./Observable.subscribeWithConfig.d.ts" />

import { createInstanceFactory, include, init, mix, } from "../../../__internal__/mixins.js";
import { ObservableLike_observe, } from "../../../concurrent.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
const Observer_create = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(DisposableMixin, ObserverMixin()), function SubscribeObserver(instance, scheduler, config) {
        init(DisposableMixin, instance);
        init(ObserverMixin(), instance, scheduler, config);
        return instance;
    }));
})();
const Observable_subscribeWithConfig = (scheduler, config) => (observable) => {
    const observer = Observer_create(scheduler, config);
    observable[ObservableLike_observe](observer);
    return observer;
};
export default Observable_subscribeWithConfig;
