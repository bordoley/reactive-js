import type * as Observable from "../../Observable.js";
import {
  ObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  SharedObservableLike,
} from "../../types.js";

const Observable_isSharedObservable: Observable.Signature["isSharedObservable"] =
  (obs: ObservableLike): obs is SharedObservableLike =>
    !obs[ObservableLike_isDeferred] &&
    !obs[ObservableLike_isRunnable] &&
    !obs[ObservableLike_isEnumerable];

export default Observable_isSharedObservable;
