import { Zip } from "../../../containers";
import { ObservableLike } from "../../../rx";
import Observable$latest from "./Observable.latest";

const Observable$combineLatest: Zip<ObservableLike>["zip"] = (
  ...observables: readonly ObservableLike<any>[]
): ObservableLike<readonly unknown[]> => Observable$latest(observables, 1);

export default Observable$combineLatest;
