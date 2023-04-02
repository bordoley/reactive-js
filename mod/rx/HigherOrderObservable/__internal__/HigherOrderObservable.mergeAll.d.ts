import { ConcatAll, ContainerOf, ContainerOperator } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
import { ObservableLike, ObserverLike } from "../../../rx.js";
import { QueueableLike, QueueableLike_backpressureStrategy } from "../../../util.js";
declare const HigherOrderObservable_mergeAll: <C extends ObservableLike<unknown>>(lift: <T>(f: Function1<ObserverLike<T>, ObserverLike<ContainerOf<C, T>>>) => ContainerOperator<C, ContainerOf<C, T>, T>) => <T_1>(options?: {
    readonly backpressureStrategy?: "overflow" | "drop-latest" | "drop-oldest" | "throw" | undefined;
    readonly capacity?: number | undefined;
    readonly maxConcurrency?: number | undefined;
} | undefined) => ContainerOperator<C, ContainerOf<C, T_1>, T_1>;
export default HigherOrderObservable_mergeAll;
