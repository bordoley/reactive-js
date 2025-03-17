import { ObservableLike, ProducerLike_consume } from "../../../computations.js";
import { invoke, isNone, none, pipe } from "../../../functions.js";
import * as Consumer from "../../../utils/Consumer.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import * as HostScheduler from "../../../utils/HostScheduler.js";
import { SchedulerLike } from "../../../utils.js";
import Iterable_first from "../../Iterable/__private__/Iterable.first.js";
import type * as Observable from "../../Observable.js";
import Observable_toProducer from "./Observable.toProducer.js";

const Observable_lastAsync: Observable.Signature["lastAsync"] =
  <T>(options?: { readonly scheduler?: SchedulerLike }) =>
  async (observable: ObservableLike<T>) => {
    let scheduler = options?.scheduler;
    using hostScheduler = isNone(scheduler) ? HostScheduler.create() : none;
    scheduler = scheduler ?? (hostScheduler as SchedulerLike);
    const queue = Consumer.createDropOldestWithoutBackpressure<T>(1, {
      autoDispose: true,
    });

    pipe(
      observable,
      Observable_toProducer(scheduler),
      invoke(ProducerLike_consume, queue),
    );

    await DisposableContainer.toPromise(queue);

    return pipe(queue, Iterable_first<T>());
  };

export default Observable_lastAsync;
