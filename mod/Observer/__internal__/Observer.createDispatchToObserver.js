/// <reference types="./Observer.createDispatchToObserver.d.ts" />

import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import { bindMethod, pipe } from "../../functions.js";
import { DispatcherLike_complete, } from "../../types.js";
import Observer_createEnqueueObserver from "./Observer.createEnqueueObserver.js";
const Observer_createDispatchToObserver = (observer, dispatcher) => pipe(Observer_createEnqueueObserver(observer, dispatcher), Disposable_onComplete(bindMethod(dispatcher, DispatcherLike_complete)));
export default Observer_createDispatchToObserver;
