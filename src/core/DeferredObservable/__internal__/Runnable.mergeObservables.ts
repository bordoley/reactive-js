import { DeferredObservableLike } from "../../../core.js";
import Observable_mergeObservables from "../../Observable/__internal__/Observable.mergeObservables.js";

const DeferredObservable_mergeObservables: <T>(
  observables: readonly DeferredObservableLike<T>[],
) => DeferredObservableLike<T> = Observable_mergeObservables as <T>(
  observables: readonly DeferredObservableLike<T>[],
) => DeferredObservableLike<T>;

export default DeferredObservable_mergeObservables;
