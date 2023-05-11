import Observable_map from "../../Observable/__internal__/Observable.map.js";
import type * as SharedObservable from "../../SharedObservable.js";
import { Function1, compose } from "../../functions.js";
import { DeferredObservableLike, SharedObservableLike } from "../../types.js";
import SharedObservable_exhaust from "./SharedObservable.exhaust.js";

const SharedObservable_exhaustMap: SharedObservable.Signature["exhaustMap"] = <
  TA,
  TB,
>(
  selector: Function1<TA, DeferredObservableLike<TB>>,
) =>
  compose(
    Observable_map(selector) as Function1<
      SharedObservableLike<TA>,
      SharedObservableLike<DeferredObservableLike<TB>>
    >,
    SharedObservable_exhaust(),
  );

export default SharedObservable_exhaustMap;
