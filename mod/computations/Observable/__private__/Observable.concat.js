/// <reference types="./Observable.concat.d.ts" />

import * as Observer from "../../../utils/__internal__/Observer.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
const Observable_concat = 
/*@__PURE__*/ DeferredEventSource.concat(Observer.createDelegatingNotifyOnlyNonCompletingNonDisposing);
export default Observable_concat;
