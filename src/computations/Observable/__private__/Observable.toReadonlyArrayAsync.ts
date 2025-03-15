import { ObservableLike, ProducerLike_consume } from "../../../computations.js";
import { invoke, isNone, none, pipe } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import * as HostScheduler from "../../../utils/HostScheduler.js";
import * as Queue from "../../../utils/Queue.js";
import { SchedulerLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_toProducer from "./Observable.toProducer.js";

const Observable_toReadonlyArrayAsync: Observable.Signature["toReadonlyArrayAsync"] =

    <T>(options?: { readonly scheduler?: SchedulerLike }) =>
    async (observable: ObservableLike<T>): Promise<ReadonlyArray<T>> => {
      let scheduler = options?.scheduler;
      using hostScheduler = isNone(scheduler) ? HostScheduler.create() : none;
      scheduler = scheduler ?? (hostScheduler as SchedulerLike);
      const queue = Queue.create<T>({ autoDispose: true });

      pipe(
        observable,
        Observable_toProducer(scheduler),
        invoke(ProducerLike_consume, queue),
      );

      await DisposableContainer.toPromise(queue);

      return Array.from(queue);
    };
export default Observable_toReadonlyArrayAsync;
