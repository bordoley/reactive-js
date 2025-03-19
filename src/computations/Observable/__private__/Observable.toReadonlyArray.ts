import {
  SourceLike_subscribe,
  SynchronousComputationOf,
} from "../../../computations.js";
import { Function1, invoke, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as VirtualTimeScheduler from "../../../utils/VirtualTimeScheduler.js";
import * as Consumer from "../../../utils/__internal__/Consumer.js";
import { VirtualTimeSchedulerLike_run } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_toProducer from "./Observable.toProducer.js";

const Observable_toReadonlyArray: Observable.Signature["toReadonlyArray"] =
  <T>(options?: {
    readonly maxMicroTaskTicks?: number;
  }): Function1<
    SynchronousComputationOf<Observable.Computation, T>,
    ReadonlyArray<T>
  > =>
  observable => {
    using scheduler = VirtualTimeScheduler.create(options);
    const consumer = Consumer.create<T>({ autoDispose: true });

    pipe(
      observable,
      Observable_toProducer({ scheduler }),
      invoke(SourceLike_subscribe, consumer),
    );

    scheduler[VirtualTimeSchedulerLike_run]();
    Disposable.raiseIfDisposedWithError(consumer);

    return Array.from(consumer);
  };

export default Observable_toReadonlyArray;
