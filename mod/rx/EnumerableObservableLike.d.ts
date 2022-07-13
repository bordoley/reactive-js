import { ObservableLike_observableType, EnumerableObservable } from "./ObservableLike.mjs";
import { RunnableObservableLike } from "./RunnableObservableLike.mjs";
interface EnumerableObservableLike<T = unknown> extends RunnableObservableLike<T> {
    readonly [ObservableLike_observableType]: typeof EnumerableObservable;
}
export { EnumerableObservableLike };
