import { Zip } from "../../../containers";
import { ObservableLike } from "../../../rx";
import Observable$latest from "./Observable.latest";

const Observable$zipLatest: Zip<ObservableLike>["zip"] = (
  ...observables: readonly ObservableLike<any>[]
): ObservableLike<readonly unknown[]> => Observable$latest(observables, 2);

export default Observable$zipLatest;
