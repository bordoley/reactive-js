import { ObservableLike, ObservableLike_observableType, RunnableObservable, EnumerableObservable } from "./ObservableLike.mjs";
interface RunnableObservableLike<T = unknown> extends ObservableLike<T> {
    readonly [ObservableLike_observableType]: typeof RunnableObservable | typeof EnumerableObservable;
}
export { RunnableObservableLike };
