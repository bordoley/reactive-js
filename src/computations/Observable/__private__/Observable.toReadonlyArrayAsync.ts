import { ObservableLike } from "../../../computations.js";
import { isNone, none, pipe } from "../../../functions.js";
import * as DefaultScheduler from "../../../utils/DefaultScheduler.js";
import * as HostScheduler from "../../../utils/HostScheduler.js";

import { SchedulerLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Producer_toReadonlyArrayAsync from "../../Producer/__private__/Producer.toReadonlyArrayAsync.js";
import Observable_toProducer from "./Observable.toProducer.js";

const Observable_toReadonlyArrayAsync: Observable.Signature["toReadonlyArrayAsync"] =

    <T>(options?: { readonly scheduler?: SchedulerLike }) =>
    async (observable: ObservableLike<T>): Promise<ReadonlyArray<T>> => {
      let scheduler = options?.scheduler ?? DefaultScheduler.getOrNone();

      using hostScheduler = isNone(scheduler) ? HostScheduler.create() : none;
      scheduler = scheduler ?? (hostScheduler as SchedulerLike);

      const result = await pipe(
        observable,
        Observable_toProducer({ scheduler }),
        Producer_toReadonlyArrayAsync<T>(),
      );

      return result;
    };
export default Observable_toReadonlyArrayAsync;
