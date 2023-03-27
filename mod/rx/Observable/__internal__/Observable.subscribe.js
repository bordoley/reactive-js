/// <reference types="./Observable.subscribe.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import Observable_subscribeWithCapacity from "./Observable.subscribeWithCapacity.js";
const Observable_subscribe = (scheduler, options) => {
    var _a;
    return Observable_subscribeWithCapacity(scheduler, (_a = options === null || options === void 0 ? void 0 : options.capacity) !== null && _a !== void 0 ? _a : MAX_SAFE_INTEGER);
};
export default Observable_subscribe;
