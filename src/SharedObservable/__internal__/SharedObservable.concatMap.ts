import Observable_map from "../../Observable/__internal__/Observable.map.js";
import type * as SharedObservable from "../../SharedObservable.js";
import { Function1, compose } from "../../functions.js";
import { DeferredObservableLike, SharedObservableLike } from "../../types.js";
import SharedObservable_concatAll from "./SharedObservable.concatAll.js";

const SharedObservable_concatMap: SharedObservable.Signature["concatMap"] = <
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
    SharedObservable_concatAll(),
  );

export default SharedObservable_concatMap;
