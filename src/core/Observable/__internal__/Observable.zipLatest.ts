import {
  ObservableContainer,
  ObservableLike,
  ReactiveContainers,
} from "../../../core.js";
import Observable_latest from "./Observable.latest.js";

const Observable_zipLatest: ReactiveContainers.TypeClass<ObservableContainer>["zipLatest"] =
  (
    ...observables: readonly ObservableLike<any>[]
  ): ObservableLike<readonly unknown[]> => Observable_latest(observables, 2);

export default Observable_zipLatest;
