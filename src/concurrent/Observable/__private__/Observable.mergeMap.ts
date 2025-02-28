import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
} from "../../../computations.js";
import { PureRunnableLike } from "../../../concurrent.js";
import { Function1, pipe } from "../../../functions.js";
import { BackpressureStrategy } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_map from "./Observable.map.js";
import Observable_mergeAll from "./Observable.mergeAll.js";

const Observable_mergeMap: Observable.Signature["mergeMap"] = (<TA, TB>(
    selector: Function1<TA, PureRunnableLike<TB>>,
    options?: {
      readonly innerType: {
        readonly [ComputationLike_isDeferred]?: boolean;
        readonly [ComputationLike_isPure]?: boolean;
        readonly [ComputationLike_isSynchronous]?: boolean;
      };
      readonly backpressureStrategy?: BackpressureStrategy;
      readonly capacity?: number;
      readonly concurrency?: number;
    },
  ) =>
  (obs: PureRunnableLike<TA>) =>
    pipe(
      obs,
      Observable_map(selector),
      Observable_mergeAll<TB>(options),
    )) as Observable.Signature["mergeMap"];

export default Observable_mergeMap;
