/// <reference types="./Observable.merge.d.ts" />

import * as Observer from "../../../utils/__internal__/Observer.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
const Observable_merge = 
/*@__PURE__*/ DeferredEventSource.merge(Observer.createDelegatingNonCompleting);
export default Observable_merge;
