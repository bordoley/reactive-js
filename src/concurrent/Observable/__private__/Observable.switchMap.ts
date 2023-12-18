import {
  DeferredObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
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
        readonly [ObservableLike_isDeferred]: boolean;
        readonly [ObservableLike_isPure]: boolean;
        readonly [ObservableLike_isRunnable]: boolean;
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
