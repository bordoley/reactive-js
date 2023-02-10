import { Zip } from "../../../containers";
import { ObservableLike } from "../../../rx";
import Observable_latest from "./Observable.latest";

const Observable_combineLatest: Zip<ObservableLike>["zip"] = (
  ...observables: readonly ObservableLike<any>[]
): ObservableLike<readonly unknown[]> => Observable_latest(observables, 1);

export default Observable_combineLatest;
