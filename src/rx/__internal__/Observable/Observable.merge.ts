import { Concat } from "../../../containers";
import { ObservableLike } from "../../../rx";
import Observable$mergeObservables from "./Observable.mergeObservables";

const Observable$merge: Concat<ObservableLike>["concat"] = <T>(
  ...observables: ObservableLike<T>[]
) => Observable$mergeObservables(observables);

export default Observable$merge;
