import { ObservableLike } from "../../../computations.js";
import { isNone, none, pipe } from "../../../functions.js";
import * as DefaultScheduler from "../../../utils/DefaultScheduler.js";
import * as HostScheduler from "../../../utils/HostScheduler.js";
import { SchedulerLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Producer_lastAsync from "../../Producer/__private__/Producer.lastAsync.js";
import Observable_toProducer from "./Observable.toProducer.js";

const Observable_lastAsync: Observable.Signature["lastAsync"] =
  <T>(options?: { readonly scheduler?: SchedulerLike }) =>
  async (observable: ObservableLike<T>) => {
    let scheduler = options?.scheduler ?? DefaultScheduler.getOrNone();

    using hostScheduler = isNone(scheduler) ? HostScheduler.create() : none;
    scheduler = scheduler ?? (hostScheduler as SchedulerLike);

    const result = await pipe(
      observable,
      Observable_toProducer<T>({ scheduler }),
      Producer_lastAsync<T>(),
    );

    return result;
  };

export default Observable_lastAsync;
