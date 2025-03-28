/// <reference types="./Observable.merge.d.ts" />

import * as Observer from "../../../utils/__internal__/Observer.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";
const Observable_merge = 
/*@__PURE__*/ DeferredSource.merge(Observer.createDelegatingNotifyOnlyNonCompletingNonDisposing);
export default Observable_merge;
