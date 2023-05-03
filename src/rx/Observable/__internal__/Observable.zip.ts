import { Container } from "../../../containers.js";
import { ObservableContainer, ObservableLike } from "../../../rx.js";
import Observable_zipObservables from "./Observable.zipObservables.js";

const Observable_zip: Container.Zip<ObservableContainer>["zip"] = <T>(
  ...observables: ObservableLike<T>[]
) => Observable_zipObservables(observables);

export default Observable_zip;
