import { RunnableLike } from "../../../computations.js";
import { bindMethod, ignore, pipeLazy } from "../../../functions.js";
import {
  EventListenerLike_notify,
  ObserverLike,
  SchedulerLike_schedule,
  SinkLike_complete,
} from "../../../utils.js";
import * as Computation from "../../Computation.js";
import Runnable_forEach from "../../Runnable/__private__/Runnable.forEach.js";
import Runnable_last from "../../Runnable/__private__/Runnable.last.js";
import Observable_createPureSynchronousObservable from "./Observable.createPureSynchronousObservable.js";
import Observable_createSynchronousObservableWithSideEffects from "./Observable.createSynchronousObservableWithSideEffects.js";

const Observable_fromRunnable =
  <T>() =>
  (runnable: RunnableLike<T>) => {
    const create = Computation.isPure(runnable)
      ? Observable_createPureSynchronousObservable
      : Observable_createSynchronousObservableWithSideEffects;
    return create<T>((observer: ObserverLike<T>) => {
      observer[SchedulerLike_schedule](
        pipeLazy(
          runnable,
          Runnable_forEach(bindMethod(observer, EventListenerLike_notify)),
          Runnable_last(),
          ignore,
          bindMethod(observer, SinkLike_complete),
        ),
      );
    });
  };

export default Observable_fromRunnable;
