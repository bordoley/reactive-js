import { ObservableContainer } from "../../containers.js";
import { ObservableLike } from "../../types.js";
import Observable_zipObservables from "./Observable.zipObservables.js";

const Observable_zip: ObservableContainer.TypeClass["zip"] = <T>(
  ...observables: ObservableLike<T>[]
) => Observable_zipObservables(observables);

export default Observable_zip;
