import { Zip } from "../../../containers";
import { ObservableLike } from "../../../rx";
import ObservableLike__latest from "./ObservableLike.latest";

const ObservableLike__zipLatest: Zip<ObservableLike>["zip"] = (
  ...observables: readonly ObservableLike<any>[]
): ObservableLike<readonly unknown[]> => ObservableLike__latest(observables, 2);

export default ObservableLike__zipLatest;
