import type * as DeferredObservable from "../../DeferredObservable.js";
import type * as Observable from "../../Observable.js";
import { Function1 } from "../../functions.js";
import { ContainerOf, ContainerOperator, HigherOrderObservableTypeClass, ObserverLike } from "../../types.js";
declare const Observable_mergeAll: <C extends Observable.ObservableContainer, CInner extends DeferredObservable.DeferredObservableContainer>(lift: <T>(f: Function1<ObserverLike<T>, ObserverLike<ContainerOf<CInner, T>>>) => ContainerOperator<C, ContainerOf<CInner, T>, T>) => <T_1>(options?: {
    readonly backpressureStrategy?: "overflow" | "drop-latest" | "drop-oldest" | "throw" | undefined;
    readonly capacity?: number | undefined;
    readonly concurrency?: number | undefined;
} | undefined) => ContainerOperator<C, ContainerOf<CInner, T_1>, T_1>;
export default Observable_mergeAll;
