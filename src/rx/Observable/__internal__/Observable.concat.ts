import { Concat } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import Observable_concatObservables from "./Observable.concatObservables.js";

const Observable_concat: Concat<ObservableLike>["concat"] = <T>(
  ...observables: ObservableLike<T>[]
) => Observable_concatObservables(observables);

export default Observable_concat;
