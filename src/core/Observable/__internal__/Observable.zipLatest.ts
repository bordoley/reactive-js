import {
  ObservableContainer,
  ObservableLike,
  ReactiveContainer,
} from "../../../core.js";
import Observable_latest from "./Observable.latest.js";

const Observable_zipLatest: ReactiveContainer.TypeClass<ObservableContainer>["zipLatest"] =
  (
    ...observables: readonly ObservableLike<any>[]
  ): ObservableLike<readonly unknown[]> => Observable_latest(observables, 2);

export default Observable_zipLatest;
