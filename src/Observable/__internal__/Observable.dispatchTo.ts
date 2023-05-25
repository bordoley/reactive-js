import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import Enumerator_forEach from "../../Enumerator/__internal__/Enumerator.forEach.js";
import type * as Observable from "../../Observable.js";
import Observer_createEnqueueObserver from "../../Observer/__internal__/Observer.createEnqueueObserver.js";
import { bindMethod, pipe } from "../../functions.js";
import {
  DispatcherLike,
  DispatcherLike_complete,
  EnumeratorLike,
  ObserverLike,
  QueueableLike_enqueue,
} from "../../types.js";
import Observable_liftObservableOperatorWithSideEffects from "./Observable.liftObservableOperatorWithSideEffects.js";

const Observable_dispatchTo: Observable.Signature["dispatchTo"] = (<T>(
  dispatcher: DispatcherLike<T>,
) => {
  const enumeratorOp = (enumerator: EnumeratorLike<T>) =>
    pipe(
      enumerator,
      Enumerator_forEach(bindMethod(dispatcher, QueueableLike_enqueue)),
      Disposable_onComplete(bindMethod(dispatcher, DispatcherLike_complete)),
    );

  const observerOp = (observer: ObserverLike<T>) =>
    pipe(
      Observer_createEnqueueObserver(observer, dispatcher),
      Disposable_onComplete(bindMethod(dispatcher, DispatcherLike_complete)),
    );

  return Observable_liftObservableOperatorWithSideEffects(
    enumeratorOp,
    observerOp,
  );
}) as Observable.Signature["dispatchTo"];

export default Observable_dispatchTo;
