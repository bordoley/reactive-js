/// <reference types="./Observable.subscribe.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import Observable_subscribeWithCapacityAndBackpressureStrategy from "./Observable.subscribeWithCapacityAndBackpressureStrategy.js";
const Observable_subscribe = (scheduler, options) => {
    var _a, _b;
    return Observable_subscribeWithCapacityAndBackpressureStrategy(scheduler, (_a = options === null || options === void 0 ? void 0 : options.capacity) !== null && _a !== void 0 ? _a : MAX_SAFE_INTEGER, (_b = options === null || options === void 0 ? void 0 : options.backpressureStrategy) !== null && _b !== void 0 ? _b : "overflow");
};
export default Observable_subscribe;
