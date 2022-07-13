import {
  EnumerableObservable,
  ObservableLike_observableType,
} from "./ObservableLike";
import { RunnableObservableLike } from "./RunnableObservableLike";

export interface EnumerableObservableLike<T = unknown>
  extends RunnableObservableLike<T> {
  readonly [ObservableLike_observableType]: typeof EnumerableObservable;
}
