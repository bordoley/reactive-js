import { Containers, ObservableContainer, ObservableTypeClass } from "../../containers.js";
import { Function1 } from "../../functions.js";
import { ObserverLike } from "../../types.js";
declare const HigherOrderObservable_mergeAll: <C extends ObservableContainer.Type>(lift: <T>(f: Function1<ObserverLike<T>, ObserverLike<Containers.Of<C, T>>>) => Containers.Operator<C, Containers.Of<C, T>, T>) => <T_1>(options?: {
    readonly backpressureStrategy?: "overflow" | "drop-latest" | "drop-oldest" | "throw" | undefined;
    readonly capacity?: number | undefined;
    readonly concurrency?: number | undefined;
} | undefined) => Containers.Operator<C, Containers.Of<C, T_1>, T_1>;
export default HigherOrderObservable_mergeAll;
