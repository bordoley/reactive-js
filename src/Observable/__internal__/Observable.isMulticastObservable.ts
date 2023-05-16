import type * as Observable from "../../Observable.js";
import {
  MulticastObservableLike,
  ObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
} from "../../types.js";

const Observable_isMulticastObservable: Observable.Signature["isMulticastObservable"] =
  (obs: ObservableLike): obs is MulticastObservableLike =>
    !obs[ObservableLike_isDeferred] &&
    !obs[ObservableLike_isRunnable] &&
    !obs[ObservableLike_isEnumerable];

export default Observable_isMulticastObservable;
