/// <reference types="./Observable.merge.d.ts" />

import * as Observer from "../../../utils/__internal__/Observer.js";
import * as DeferredReactiveSource from "../../__internal__/DeferredReactiveSource.js";
const Observable_merge = 
/*@__PURE__*/ DeferredReactiveSource.merge(Observer.createDelegatingNotifyOnlyNonCompletingNonDisposing);
export default Observable_merge;
