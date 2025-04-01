/// <reference types="./Observable.concat.d.ts" />

import * as Observer from "../../../utils/__internal__/Observer.js";
import * as DeferredReactiveSource from "../../__internal__/DeferredReactiveSource.js";
const Observable_concat = 
/*@__PURE__*/ DeferredReactiveSource.concat(Observer.createDelegatingNotifyOnlyNonCompletingNonDisposing);
export default Observable_concat;
