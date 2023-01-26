import { Concat } from "../../../containers";
import { ObservableLike } from "../../../rx";
import Observable_mergeObservables from "./Observable.mergeObservables";

const Observable_merge: Concat<ObservableLike>["concat"] = <T>(
  ...observables: ObservableLike<T>[]
) => Observable_mergeObservables(observables);

export default Observable_merge;
