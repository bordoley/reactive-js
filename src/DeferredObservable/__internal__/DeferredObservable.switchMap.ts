import type * as DeferredObservable from "../../DeferredObservable.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import { Function1, compose } from "../../functions.js";
import { DeferredObservableLike } from "../../types.js";
import DeferredObservable_switchAll from "./DeferredObservable.switchAll.js";

const DeferredObservable_switchMap: DeferredObservable.Signature["switchMap"] =
  <TA, TB>(selector: Function1<TA, DeferredObservableLike<TB>>) =>
    compose(
      Observable_map(selector) as Function1<
        DeferredObservableLike<TA>,
        DeferredObservableLike<DeferredObservableLike<TB>>
      >,
      DeferredObservable_switchAll(),
    );

export default DeferredObservable_switchMap;
