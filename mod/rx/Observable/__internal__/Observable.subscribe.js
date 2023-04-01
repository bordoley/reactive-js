/// <reference types="./Observable.subscribe.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import Observable_subscribeWithCapacityAndBackpressureStrategy from "./Observable.subscribeWithCapacityAndBackpressureStrategy.js";
const Observable_subscribe = (scheduler, options) => Observable_subscribeWithCapacityAndBackpressureStrategy(scheduler, options?.capacity ?? MAX_SAFE_INTEGER, options?.backpressureStrategy ?? "overflow");
export default Observable_subscribe;
