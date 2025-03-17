import {
  ProducerLike_consume,
  SynchronousObservableLike,
} from "../../../computations.js";
import { Function1, invoke, isSome, pipe, raise } from "../../../functions.js";
import * as Consumer from "../../../utils/Consumer.js";
import * as VirtualTimeScheduler from "../../../utils/VirtualTimeScheduler.js";
import {
  DisposableLike_error,
  VirtualTimeSchedulerLike_run,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_toProducer from "./Observable.toProducer.js";

const Observable_toReadonlyArray: Observable.Signature["toReadonlyArray"] =
  <T>(options?: {
    readonly maxMicroTaskTicks?: number;
  }): Function1<SynchronousObservableLike<T>, ReadonlyArray<T>> =>
  observable => {
    using vts = VirtualTimeScheduler.create(options);
    const queue = Consumer.create<T>({ autoDispose: true });

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

    return Array.from(queue);
  };

export default Observable_toReadonlyArray;
