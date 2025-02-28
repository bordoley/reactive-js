import { ObserverLike, SchedulerLike_schedule } from "../../../concurrent.js";
import { Factory, compose, error, pipe, raise } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import type * as Observable from "../../Observable.js";
import Observable_createPureSynchronousObservable from "./Observable.createPureSynchronousObservable.js";

const Observable_raise: Observable.Signature["raise"] = <T>(options?: {
  readonly delay?: number;
  readonly raise?: Factory<unknown>;
}) =>
  Observable_createPureSynchronousObservable((observer: ObserverLike<T>) => {
    const { raise: factory = raise, delay = 0 } = options ?? {};

    pipe(
      observer[SchedulerLike_schedule](compose(factory, error, raise), {
        delay,
      }),
      Disposable.addTo(observer),
    );
  });

export default Observable_raise;
