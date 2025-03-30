/// <reference types="./Observable.latest.d.ts" />

import { include, init, mixInstanceFactory, } from "../../../__internal__/mixins.js";
import DelegatingConsumerMixin from "../../../utils/__mixins__/DelegatingConsumerMixin.js";
import DelegatingSchedulerMixin from "../../../utils/__mixins__/DelegatingSchedulerMixin.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";
import LatestEventListenerMixin from "../../__mixins__/LatestEventListenerMixin.js";
const createLatestObserver = 
/*@__PURE__*/
(() => mixInstanceFactory(include(DelegatingConsumerMixin(), LatestEventListenerMixin(), DelegatingSchedulerMixin), function LatestObserver(delegate, context) {
    init(DelegatingConsumerMixin(), this, delegate);
    init(LatestEventListenerMixin(), this, delegate, context);
    init(DelegatingSchedulerMixin, this, delegate);
    return this;
}))();
export const Observable_combineLatest = ((...observables) => DeferredSource.latest(observables, "combine-latest", createLatestObserver));
export const Observable_zipLatest = ((...observables) => DeferredSource.latest(observables, "zip-latest", createLatestObserver));
