import type * as MulticastObservable from "../../MulticastObservable.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import { Function1, compose } from "../../functions.js";
import {
  DeferredObservableLike,
  MulticastObservableLike,
} from "../../types.js";
import MulticastObservable_concatAll from "./MulticastObservable.concatAll.js";

const MulticastObservable_concatMap: MulticastObservable.Signature["concatMap"] =
  <TA, TB>(selector: Function1<TA, DeferredObservableLike<TB>>) =>
    compose(
      Observable_map(selector) as Function1<
        MulticastObservableLike<TA>,
        MulticastObservableLike<DeferredObservableLike<TB>>
      >,
      MulticastObservable_concatAll(),
    );

export default MulticastObservable_concatMap;
