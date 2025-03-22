import {
  SourceLike_subscribe,
  SynchronousComputationOf,
} from "../../../computations.js";
import { Function1, Optional, invoke, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as VirtualTimeScheduler from "../../../utils/VirtualTimeScheduler.js";
import * as Consumer from "../../../utils/__internal__/Consumer.js";
import { VirtualTimeSchedulerLike_run } from "../../../utils.js";
import Iterable_first from "../../Iterable/__private__/Iterable.first.js";
import type * as Observable from "../../Observable.js";
import Observable_toProducer from "./Observable.toProducer.js";

const Observable_last: Observable.Signature["last"] =
  <T>(options?: {
    readonly maxMicroTaskTicks?: number;
  }): Function1<
    SynchronousComputationOf<Observable.Computation, T>,
    Optional<T>
  > =>
  observable => {
    using scheduler = VirtualTimeScheduler.create(options);
    const queue = Consumer.createDropOldestWithoutBackpressure<T>(1, {
      autoDispose: true,
    });

    pipe(
      observable,
      Observable_toProducer<T>({ scheduler }),
      invoke(SourceLike_subscribe, queue),
    );

    scheduler[VirtualTimeSchedulerLike_run]();
    Disposable.raiseIfDisposedWithError(queue);

    return pipe(queue, Iterable_first());
  };

export default Observable_last;
