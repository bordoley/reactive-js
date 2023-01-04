import { Zip } from "../../../containers";
import { ObservableLike } from "../../../rx";
import ObservableLike__latest from "./ObservableLike.latest";

const ObservableLike__combineLatest: Zip<ObservableLike>["zip"] = (
  ...observables: readonly ObservableLike<any>[]
): ObservableLike<readonly unknown[]> => ObservableLike__latest(observables, 1);

export default ObservableLike__combineLatest;
