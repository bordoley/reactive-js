import { Concat } from "../../../containers";
import { ObservableLike } from "../../../rx";
import ObservableLike__mergeObservables from "./ObservableLike.mergeObservables";

const merge: Concat<ObservableLike>["concat"] = <T>(
  ...observables: ObservableLike<T>[]
) => ObservableLike__mergeObservables(observables);

export default merge;
