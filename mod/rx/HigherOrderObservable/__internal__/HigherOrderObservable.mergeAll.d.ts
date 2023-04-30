import { ContainerOf, ContainerOperator } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
import { MergeAll, ObservableContainerLike, ObserverLike } from "../../../rx.js";
declare const HigherOrderObservable_mergeAll: <C extends ObservableContainerLike<unknown>>(lift: <T>(f: Function1<ObserverLike<T>, ObserverLike<ContainerOf<C, T>>>) => ContainerOperator<C, ContainerOf<C, T>, T>) => <T_1>(options?: {
    readonly backpressureStrategy?: "overflow" | "drop-latest" | "drop-oldest" | "throw" | undefined;
    readonly capacity?: number | undefined;
    readonly concurrency?: number | undefined;
} | undefined) => ContainerOperator<C, ContainerOf<C, T_1>, T_1>;
export default HigherOrderObservable_mergeAll;
