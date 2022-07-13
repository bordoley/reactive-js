import {
  EnumerableObservable,
  ObservableLike,
  ObservableLike_observableType,
  RunnableObservable,
} from "./ObservableLike";

export interface RunnableObservableLike<T = unknown> extends ObservableLike<T> {
  readonly [ObservableLike_observableType]:
    | typeof RunnableObservable
    | typeof EnumerableObservable;
}
