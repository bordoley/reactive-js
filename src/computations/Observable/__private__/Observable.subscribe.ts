import { ComputationOf } from "../../../computations.js";
import { pipe } from "../../../functions.js";
import * as DefaultScheduler from "../../../utils/DefaultScheduler.js";
import { SchedulerLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Producer_subscribe from "../../Producer/__private__/Producer.subscribe.js";
import Observable_toProducer from "./Observable.toProducer.js";

const Observable_subscribe: Observable.Signature["subscribe"] =
  <T>(options?: { scheduler?: SchedulerLike }) =>
  (observable: ComputationOf<Observable.Computation, T>) => {
    const scheduler = options?.scheduler ?? DefaultScheduler.get();

    return pipe(
      observable,
      Observable_toProducer<T>({ scheduler }),
      Producer_subscribe(),
    );
  };

export default Observable_subscribe;
