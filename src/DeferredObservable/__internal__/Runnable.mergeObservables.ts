import Observable_mergeObservables from "../../Observable/__internal__/Observable.mergeObservables.js";
import { DeferredObservableLike } from "../../types.js";

const DeferredObservable_mergeObservables: <T>(
  observables: readonly DeferredObservableLike<T>[],
) => DeferredObservableLike<T> = Observable_mergeObservables as <T>(
  observables: readonly DeferredObservableLike<T>[],
) => DeferredObservableLike<T>;

export default DeferredObservable_mergeObservables;
