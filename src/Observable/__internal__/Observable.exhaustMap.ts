import type * as Observable from "../../Observable.js";
import { Function1, pipe } from "../../functions.js";
import { DeferredObservableLike, ObservableLike } from "../../types.js";
import Observable_exhaust from "./Observable.exhaust.js";
import Observable_map from "./Observable.map.js";

const Observable_exhaustMap: Observable.Signature["exhaustMap"] = (<TA, TB>(
    selector: Function1<TA, DeferredObservableLike<TB>>,
  ) =>
  (obs: ObservableLike<TA>) =>
    pipe(
      obs,
      Observable_map(selector),
      Observable_exhaust<TB>(),
    )) as Observable.Signature["exhaustMap"];

export default Observable_exhaustMap;
