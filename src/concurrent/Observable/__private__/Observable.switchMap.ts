import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
} from "../../../computations.js";
import {
  DeferredObservableLike,
  PureRunnableLike,
} from "../../../concurrent.js";
import { Function1, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observable_map from "./Observable.map.js";
import Observable_switchAll from "./Observable.switchAll.js";

const Observable_switchMap: Observable.Signature["switchMap"] = (<TA, TB>(
    selector: Function1<TA, DeferredObservableLike<TB>>,
    options?: {
      readonly innerType?: {
        readonly [ComputationLike_isDeferred]: boolean;
        readonly [ComputationLike_isPure]: boolean;
        readonly [ComputationLike_isSynchronous]: boolean;
      };
    },
  ) =>
  (obs: PureRunnableLike<TA>) =>
    pipe(
      obs,
      Observable_map(selector),
      Observable_switchAll<TB>(
        options as { innerType: typeof Observable.PureRunnableType },
      ),
    )) as Observable.Signature["switchMap"];

export default Observable_switchMap;
