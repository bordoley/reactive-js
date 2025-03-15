import {
  ProducerLike_consume,
  SynchronousObservableLike,
} from "../../../computations.js";
import {
  Function1,
  Optional,
  invoke,
  isSome,
  pipe,
  raise,
} from "../../../functions.js";
import * as Queue from "../../../utils/Queue.js";
import * as VirtualTimeScheduler from "../../../utils/VirtualTimeScheduler.js";
import {
  DisposableLike_error,
  VirtualTimeSchedulerLike_run,
} from "../../../utils.js";
import Iterable_first from "../../Iterable/__private__/Iterable.first.js";
import type * as Observable from "../../Observable.js";
import Observable_toProducer from "./Observable.toProducer.js";

const Observable_last: Observable.Signature["last"] =
  <T>(options?: {
    readonly maxMicroTaskTicks?: number;
  }): Function1<SynchronousObservableLike<T>, Optional<T>> =>
  observable => {
    using vts = VirtualTimeScheduler.create(options);
    const queue = Queue.createDropOldestWithoutBackpressure<T>(1, {
      autoDispose: true,
    });

    pipe(
      observable,
      Observable_toProducer(vts),
      invoke(ProducerLike_consume, queue),
    );

    vts[VirtualTimeSchedulerLike_run]();

    const err = queue[DisposableLike_error];
    if (isSome(err)) {
      raise(err);
    }

    return pipe(queue, Iterable_first());
  };

export default Observable_last;
