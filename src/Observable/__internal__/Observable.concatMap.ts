import type * as Observable from "../../Observable.js";
import { Function1, pipe } from "../../functions.js";
import { DeferredObservableLike, ObservableLike } from "../../types.js";
import Observable_concatAll from "./Observable.concatAll.js";
import Observable_map from "./Observable.map.js";

const Observable_concatMap: Observable.Signature["concatMap"] = (<TA, TB>(
    selector: Function1<TA, DeferredObservableLike<TB>>,
  ) =>
  (obs: ObservableLike<TA>) =>
    pipe(
      obs,
      Observable_map(selector),
      Observable_concatAll<TB>(),
    )) as Observable.Signature["concatMap"];

export default Observable_concatMap;
