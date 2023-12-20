import { ObserverLike, SchedulerLike_schedule } from "../../../concurrent.js";
import { Factory, error, pipe, raise } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import type * as Observable from "../../Observable.js";
import Observable_createPureRunnable from "./Observable.createPureRunnable.js";

const Observable_throws: Observable.Signature["throws"] = (options?: {
  readonly delay?: number;
  readonly raise?: Factory<unknown>;
}) =>
  Observable_createPureRunnable((observer: ObserverLike) => {
    const { raise: factory = raise, delay = 0 } = options ?? {};

    pipe(
      observer[SchedulerLike_schedule](() => raise(error(factory())), {
        delay,
      }),
      Disposable.addTo(observer),
    );
  });

export default Observable_throws;
