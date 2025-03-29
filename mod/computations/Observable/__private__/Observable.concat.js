/// <reference types="./Observable.concat.d.ts" />

import * as Observer from "../../../utils/__internal__/Observer.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";
const Observable_concat = 
/*@__PURE__*/ DeferredSource.concat(Observer.createDelegatingNotifyOnlyNonCompletingNonDisposing);
export default Observable_concat;
