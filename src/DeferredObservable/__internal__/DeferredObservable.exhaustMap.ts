import type * as DeferredObservable from "../../DeferredObservable.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import { Function1, compose } from "../../functions.js";
import { DeferredObservableLike } from "../../types.js";
import DeferredObservable_exhaust from "./DeferredObservable.exhaust.js";

const DeferredObservable_exhaustMap: DeferredObservable.Signature["exhaustMap"] =
  <TA, TB>(selector: Function1<TA, DeferredObservableLike<TB>>) =>
    compose(
      Observable_map(selector) as Function1<
        DeferredObservableLike<TA>,
        DeferredObservableLike<DeferredObservableLike<TB>>
      >,
      DeferredObservable_exhaust(),
    );

export default DeferredObservable_exhaustMap;
