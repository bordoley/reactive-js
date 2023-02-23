import { Merge, ObservableLike } from "../../../rx.js";
import Observable_mergeObservables from "./Observable.mergeObservables.js";

const Observable_merge: Merge<ObservableLike>["merge"] = <T>(
  ...observables: ObservableLike<T>[]
) => Observable_mergeObservables(observables);

export default Observable_merge;
