import { ObservableContainer, ObservableContainers } from "../../containers.js";
import { ObservableLike } from "../../types.js";
import Observable_latest from "./Observable.latest.js";

const Observable_zipLatest: ObservableContainers.TypeClass<ObservableContainer>["zipLatest"] =
  (
    ...observables: readonly ObservableLike<any>[]
  ): ObservableLike<readonly unknown[]> => Observable_latest(observables, 2);

export default Observable_zipLatest;
