/// <reference types="./Producer.latest.d.ts" />

import { include, init, mixInstanceFactory, } from "../../../__internal__/mixins.js";
import DelegatingConsumerMixin from "../../../utils/__mixins__/DelegatingConsumerMixin.js";
import * as DeferredReactiveSource from "../../__internal__/DeferredReactiveSource.js";
import LatestEventListenerMixin from "../../__mixins__/LatestEventListenerMixin.js";
const createLatestConsumer = 
/*@__PURE__*/
(() => mixInstanceFactory(include(DelegatingConsumerMixin(), LatestEventListenerMixin()), function LatestConsumer(delegate, context) {
    init(DelegatingConsumerMixin(), this, delegate);
    init(LatestEventListenerMixin(), this, delegate, context);
    return this;
}))();
export const Producer_combineLatest = ((...producers) => DeferredReactiveSource.latest(producers, "combine-latest", createLatestConsumer));
export const Producer_zipLatest = ((...Producers) => DeferredReactiveSource.latest(Producers, "zip-latest", createLatestConsumer));
