/// <reference types="./Observable.dispatchTo.d.ts" />

import { DispatcherLike_complete, } from "../../../concurrent.js";
import { bindMethod, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import Observer_createEnqueueObserver from "../../Observer/__internal__/Observer.createEnqueueObserver.js";
import Observable_liftWithSideEffects from "./Observable.liftWithSideEffects.js";
const Observable_dispatchTo = (dispatcher) => Observable_liftWithSideEffects((observer) => pipe(Observer_createEnqueueObserver(observer, dispatcher), Disposable.onComplete(bindMethod(dispatcher, DispatcherLike_complete))));
export default Observable_dispatchTo;
