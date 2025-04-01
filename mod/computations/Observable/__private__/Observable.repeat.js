/// <reference types="./Observable.repeat.d.ts" />

import * as Observer from "../../../utils/__internal__/Observer.js";
import * as DeferredReactiveSource from "../../__internal__/DeferredReactiveSource.js";
const Observable_repeat = ((shouldRepeat) => DeferredReactiveSource.repeat(Observer.createDelegatingNotifyOnlyNonCompletingNonDisposing, shouldRepeat));
export default Observable_repeat;
