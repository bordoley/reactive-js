import { Function1 } from "../../functions.js";
import { Containers, ObservableContainer, ObservableContainers, ObserverLike } from "../../types.js";
declare const HigherOrderObservable_mergeAll: <C extends ObservableContainer>(lift: <T>(f: Function1<ObserverLike<T>, ObserverLike<Containers.Of<C, T>>>) => Containers.Operator<C, Containers.Of<C, T>, T>) => <T_1>(options?: {
    readonly backpressureStrategy?: "overflow" | "drop-latest" | "drop-oldest" | "throw" | undefined;
    readonly capacity?: number | undefined;
    readonly concurrency?: number | undefined;
} | undefined) => Containers.Operator<C, Containers.Of<C, T_1>, T_1>;
export default HigherOrderObservable_mergeAll;
