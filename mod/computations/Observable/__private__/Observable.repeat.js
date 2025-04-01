/// <reference types="./Observable.repeat.d.ts" />

import * as Observer from "../../../utils/__internal__/Observer.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
const Observable_repeat = ((shouldRepeat) => DeferredEventSource.repeat(Observer.createDelegatingNotifyOnlyNonCompletingNonDisposing, shouldRepeat));
export default Observable_repeat;
