import type * as Observable from "../../Observable.js";
import {
  DeferredObservableLike,
  ObservableLike,
  ObservableLike_isDeferred,
} from "../../types.js";

const Observable_isDeferredObservable: Observable.Signature["isDeferredObservable"] =
  (obs: ObservableLike): obs is DeferredObservableLike =>
    obs[ObservableLike_isDeferred];

export default Observable_isDeferredObservable;
