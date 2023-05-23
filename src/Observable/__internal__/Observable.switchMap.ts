import type * as Observable from "../../Observable.js";
import { Function1, pipe } from "../../functions.js";
import { DeferredObservableLike, ObservableLike } from "../../types.js";
import Observable_map from "./Observable.map.js";
import Observable_switchAll from "./Observable.switchAll.js";

const Observable_switchMap: Observable.Signature["switchMap"] = (<TA, TB>(
    selector: Function1<TA, DeferredObservableLike<TB>>,
  ) =>
  (obs: ObservableLike<TA>) =>
    pipe(
      obs,
      Observable_map(selector),
      Observable_switchAll<TB>(),
    )) as Observable.Signature["switchMap"];

export default Observable_switchMap;
