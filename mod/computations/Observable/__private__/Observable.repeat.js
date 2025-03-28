/// <reference types="./Observable.repeat.d.ts" />

import * as Observer from "../../../utils/__internal__/Observer.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";
const Observable_repeat = ((shouldRepeat) => DeferredSource.repeat(Observer.createDelegatingNotifyOnlyNonCompletingNonDisposing, shouldRepeat));
export default Observable_repeat;
