import type * as DeferredObservable from "../../DeferredObservable.js";
import Observable_fromAsyncFactory from "../../Observable/__internal__/Observable.fromAsyncFactory.js";
import { Function2, pipe } from "../../functions.js";
import DeferredObservable_concatMap from "./DeferredObservable.concatMap.js";

const DeferredObservable_flatMapAsync: DeferredObservable.Signature["flatMapAsync"] =
  <TA, TB>(f: Function2<TA, AbortSignal, Promise<TB>>) =>
    DeferredObservable_concatMap((a: TA) =>
      pipe(
        (abortSignal: AbortSignal) => f(a, abortSignal),
        Observable_fromAsyncFactory(),
      ),
    );

export default DeferredObservable_flatMapAsync;
