import {
  Container,
  ObservableContainer,
  ObservableLike,
} from "../../../core.js";
import Observable_zipObservables from "./Observable.zipObservables.js";

const Observable_zip: Container.TypeClass<ObservableContainer>["zip"] = <T>(
  ...observables: ObservableLike<T>[]
) => Observable_zipObservables(observables);

export default Observable_zip;
