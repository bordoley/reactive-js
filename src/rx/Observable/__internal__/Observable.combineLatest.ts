import { Zip } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import Observable_latest from "./Observable.latest.js";

const Observable_combineLatest: Zip<ObservableLike>["zip"] = (
  ...observables: readonly ObservableLike<any>[]
): ObservableLike<readonly unknown[]> => Observable_latest(observables, 1);

export default Observable_combineLatest;
