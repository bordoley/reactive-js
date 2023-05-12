import Observable_fromAsyncFactory from "../../Observable/__internal__/Observable.fromAsyncFactory.js";
import type * as SharedObservable from "../../SharedObservable.js";
import { Function2, pipe } from "../../functions.js";
import SharedObservable_concatMap from "./SharedObservable.concatMap.js";

const SharedObservable_flatMapAsync: SharedObservable.Signature["flatMapAsync"] =
  <TA, TB>(f: Function2<TA, AbortSignal, Promise<TB>>) =>
    SharedObservable_concatMap((a: TA) =>
      pipe(
        (abortSignal: AbortSignal) => f(a, abortSignal),
        Observable_fromAsyncFactory(),
      ),
    );

export default SharedObservable_flatMapAsync;
