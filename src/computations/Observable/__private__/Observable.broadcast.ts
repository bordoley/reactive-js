import { ObservableLike } from "../../../computations.js";
import { pipe } from "../../../functions.js";
import { SchedulerLike } from "../../../utils.js";
import * as Computation from "../../Computation.js";
import type * as Observable from "../../Observable.js";
import Producer_broadcast from "../../Producer/__private__/Producer.broadcast.js";
import SynchronousObservable_broadcast from "../../SynchronousObservable/__private__/SynchronousObservable.broadcast.js";
import Observable_toProducer from "./Observable.toProducer.js";

const Observable_broadcast: Observable.Signature["broadcast"] = (<T>(options?: {
    autoDispose?: boolean;
    scheduler?: SchedulerLike;
  }) =>
  (observable: ObservableLike<T>) =>
    Computation.isSynchronous(observable)
      ? pipe(observable, SynchronousObservable_broadcast<T>(options))
      : pipe(
          observable,
          Observable_toProducer<T>(options),
          Producer_broadcast(options),
        )) as Observable.Signature["broadcast"];

export default Observable_broadcast;
