import Enumerator_forEach from "../../Enumerator/__internal__/Enumerator.forEach.js";
import type * as Observable from "../../Observable.js";
import Observer_createEnqueueObserver from "../../Observer/__internal__/Observer.createEnqueueObserver.js";
import { bindMethod, partial, pipe } from "../../functions.js";
import { QueueableLike, QueueableLike_enqueue } from "../../types.js";
import Observable_liftObservableOperatorWithSideEffects from "./Observable.liftObservableOperatorWithSideEffects.js";

const Observable_enqueue: Observable.Signature["enqueue"] = <T>(
  queue: QueueableLike<T>,
) => {
  const op = pipe(Observer_createEnqueueObserver, partial(queue));

  return Observable_liftObservableOperatorWithSideEffects(
    Enumerator_forEach(bindMethod(queue, QueueableLike_enqueue)),
    op,
  );
};

export default Observable_enqueue;
