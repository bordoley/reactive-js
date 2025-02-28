import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
} from "../../../computations.js";
import {
  ObservableLike_isDeferred,
  PureRunnableLike,
} from "../../../concurrent.js";
import { Function1, none, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observable_mergeMap from "./Observable.mergeMap.js";

const Observable_concatMap: Observable.Signature["concatMap"] = (<TA, TB>(
    selector: Function1<TA, PureRunnableLike<TB>>,
    options?: {
      readonly innerType?: {
        readonly [ObservableLike_isDeferred]: boolean;
        readonly [ComputationLike_isPure]: boolean;
        readonly [ComputationLike_isSynchronous]: boolean;
      };
    },
  ) =>
  (obs: PureRunnableLike<TA>) =>
    pipe(
      obs,
      Observable_mergeMap(selector, {
        ...(options ?? {}),
        concurrency: 1,
        backpressureStrategy: none,
        capacity: none,
      }),
    )) as Observable.Signature["concatMap"];

export default Observable_concatMap;
