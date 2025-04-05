/// <reference types="./Observable.latest.d.ts" />

import { include, init, mixInstanceFactory, } from "../../../__internal__/mixins.js";
import DelegatingConsumerMixin from "../../../utils/__mixins__/DelegatingConsumerMixin.js";
import DelegatingObserverSchedulerMixin from "../../../utils/__mixins__/DelegatingObserverSchedulerMixin.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
import LatestEventListenerMixin from "../../__mixins__/LatestEventListenerMixin.js";
const createLatestObserver = 
/*@__PURE__*/
(() => mixInstanceFactory(include(DelegatingConsumerMixin(), LatestEventListenerMixin(), DelegatingObserverSchedulerMixin()), function LatestObserver(delegate, context) {
    init(DelegatingConsumerMixin(), this, delegate);
    init(LatestEventListenerMixin(), this, delegate, context);
    init(DelegatingObserverSchedulerMixin(), this, delegate);
    return this;
}))();
export const Observable_combineLatest = ((...observables) => DeferredEventSource.latest(observables, "combine-latest", createLatestObserver));
export const Observable_zipLatest = ((...observables) => DeferredEventSource.latest(observables, "zip-latest", createLatestObserver));
