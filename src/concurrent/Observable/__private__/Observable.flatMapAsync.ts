import {
  ObservableLike_isDeferred,
  ObservableLike_isMulticasted,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
} from "../../../concurrent.js";
import { Function2, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observable_concatMap from "./Observable.concatMap.js";
import Observable_fromAsyncFactory from "./Observable.fromAsyncFactory.js";

const Observable_flatMapAsync: Observable.Signature["flatMapAsync"] = <TA, TB>(
  f: Function2<TA, AbortSignal, Promise<TB>>,
) => {
  const mapper = (a: TA) =>
    pipe(
      (abortSignal: AbortSignal) => f(a, abortSignal),
      Observable_fromAsyncFactory(),
    );

  return Observable_concatMap(mapper, {
    innerType: {
      [ObservableLike_isDeferred]: true,
      [ObservableLike_isMulticasted]: false,
      [ObservableLike_isPure]: false,
      [ObservableLike_isRunnable]: false,
    },
  });
};

export default Observable_flatMapAsync;
