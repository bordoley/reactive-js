/// <reference types="./Observable.dispatchTo.d.ts" />

import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import Enumerator_forEach from "../../Enumerator/__internal__/Enumerator.forEach.js";
import Observer_createEnqueueObserver from "../../Observer/__internal__/Observer.createEnqueueObserver.js";
import { bindMethod, pipe } from "../../functions.js";
import { DispatcherLike_complete, QueueableLike_enqueue, } from "../../types.js";
import Observable_liftObservableOperatorWithSideEffects from "./Observable.liftObservableOperatorWithSideEffects.js";
const Observable_dispatchTo = ((dispatcher) => {
    const enumeratorOp = (enumerator) => pipe(enumerator, Enumerator_forEach(bindMethod(dispatcher, QueueableLike_enqueue)), Disposable_onComplete(bindMethod(dispatcher, DispatcherLike_complete)));
    const observerOp = (observer) => pipe(Observer_createEnqueueObserver(observer, dispatcher), Disposable_onComplete(bindMethod(dispatcher, DispatcherLike_complete)));
    return Observable_liftObservableOperatorWithSideEffects(enumeratorOp, observerOp);
});
export default Observable_dispatchTo;
