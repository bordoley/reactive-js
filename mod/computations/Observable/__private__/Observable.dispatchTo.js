/// <reference types="./Observable.dispatchTo.d.ts" />

import { bindMethod, pipe } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import Observer_createEnqueueObserver from "../../../utils/Observer/__internal__/Observer.createEnqueueObserver.js";
import { DispatcherLike_complete, } from "../../../utils.js";
import Observable_liftWithSideEffects from "./Observable.liftWithSideEffects.js";
const Observable_dispatchTo = (dispatcher) => Observable_liftWithSideEffects((observer) => pipe(Observer_createEnqueueObserver(observer, dispatcher), DisposableContainer.onComplete(bindMethod(dispatcher, DispatcherLike_complete))));
export default Observable_dispatchTo;
