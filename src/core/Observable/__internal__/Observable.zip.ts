import {
  Containers,
  ObservableContainer,
  ObservableLike,
} from "../../../core.js";
import Observable_zipObservables from "./Observable.zipObservables.js";

const Observable_zip: Containers.TypeClass<ObservableContainer>["zip"] = <T>(
  ...observables: ObservableLike<T>[]
) => Observable_zipObservables(observables);

export default Observable_zip;
