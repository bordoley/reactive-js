import type * as Observable from "../../Observable.js";
import {
  DeferredObservableBaseLike,
  ObservableBaseLike,
  ObservableLike_isDeferred,
} from "../../types.js";

const Observable_isDeferredObservable: Observable.Signature["isDeferredObservable"] =
  (obs: ObservableBaseLike): obs is DeferredObservableBaseLike =>
    obs[ObservableLike_isDeferred];

export default Observable_isDeferredObservable;
