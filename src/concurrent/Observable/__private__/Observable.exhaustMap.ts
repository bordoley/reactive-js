import {
  ObservableLike_isDeferred,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  PureRunnableLike,
} from "../../../concurrent.js";
import { Function1, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observable_mergeMap from "./Observable.mergeMap.js";

const Observable_exhaustMap: Observable.Signature["exhaustMap"] = (<TA, TB>(
    selector: Function1<TA, PureRunnableLike<TB>>,
    options?: {
      readonly [ObservableLike_isDeferred]?: boolean;
      readonly [ObservableLike_isPure]?: boolean;
      readonly [ObservableLike_isRunnable]?: boolean;
    },
  ) =>
  (obs: PureRunnableLike<TA>) =>
    pipe(
      obs,
      Observable_mergeMap(selector, {
        ...(options ?? {}),
        capacity: 0,
        backpressureStrategy: "drop-latest",
        concurrency: 1,
      }),
    )) as Observable.Signature["exhaustMap"];

export default Observable_exhaustMap;
