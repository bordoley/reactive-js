import { Zip } from "../../../containers";
import { ObservableLike } from "../../../rx";
import Observable_latest from "./Observable.latest";

const Observable_zipLatest: Zip<ObservableLike>["zip"] = (
  ...observables: readonly ObservableLike<any>[]
): ObservableLike<readonly unknown[]> => Observable_latest(observables, 2);

export default Observable_zipLatest;
