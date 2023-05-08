/// <reference types="./Observer.createDispatchToObserver.d.ts" />

import { DispatcherLike_complete, } from "../../../core.js";
import Disposable_onComplete from "../../../core/Disposable/__internal__/Disposable.onComplete.js";
import { bindMethod, pipe } from "../../../functions.js";
import Observer_createEnqueueObserver from "./Observer.createEnqueueObserver.js";
const Observer_createDispatchToObserver = (observer, dispatcher) => pipe(Observer_createEnqueueObserver(observer, dispatcher), Disposable_onComplete(bindMethod(dispatcher, DispatcherLike_complete)));
export default Observer_createDispatchToObserver;
