import { Concat } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import Observable_mergeObservables from "./Observable.mergeObservables.js";

const Observable_merge: Concat<ObservableLike>["concat"] = <T>(
  ...observables: ObservableLike<T>[]
) => Observable_mergeObservables(observables);

export default Observable_merge;
