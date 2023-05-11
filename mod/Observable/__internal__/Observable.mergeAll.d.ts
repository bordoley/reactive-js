import { Function1 } from "../../functions.js";
import { HigherOrderObservableBaseTypeClass } from "../../type-classes.js";
import { ContainerOf, ContainerOperator, DeferredObservableContainer, ObserverLike } from "../../types.js";
declare const Observable_mergeAll: <C extends import("../../types.js").ObservableContainer, CInner extends DeferredObservableContainer>(lift: <T>(f: Function1<ObserverLike<T>, ObserverLike<ContainerOf<CInner, T>>>) => ContainerOperator<C, ContainerOf<CInner, T>, T>) => <T_1>(options?: {
    readonly backpressureStrategy?: "overflow" | "drop-latest" | "drop-oldest" | "throw" | undefined;
    readonly capacity?: number | undefined;
    readonly concurrency?: number | undefined;
} | undefined) => ContainerOperator<C, ContainerOf<CInner, T_1>, T_1>;
export default Observable_mergeAll;
