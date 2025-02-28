import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
} from "../../../computations.js";
import { PureSynchronousObservableLike } from "../../../concurrent.js";
import { Function1, pipe } from "../../../functions.js";
import { DropLatestBackpressureStrategy } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_mergeMap from "./Observable.mergeMap.js";

const Observable_exhaustMap: Observable.Signature["exhaustMap"] = (<TA, TB>(
    selector: Function1<TA, PureSynchronousObservableLike<TB>>,
    options?: {
      readonly innerType?: {
        readonly [ComputationLike_isDeferred]?: boolean;
        readonly [ComputationLike_isPure]?: boolean;
        readonly [ComputationLike_isSynchronous]?: boolean;
      };
    },
  ) =>
  (obs: PureSynchronousObservableLike<TA>) =>
    pipe(
      obs,
      Observable_mergeMap(selector, {
        ...(options ?? {}),
        capacity: 0,
        backpressureStrategy: DropLatestBackpressureStrategy,
        concurrency: 1,
      }),
    )) as Observable.Signature["exhaustMap"];

export default Observable_exhaustMap;
