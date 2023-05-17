import type * as DeferredObservable from "../../DeferredObservable.js";
import type * as Observable from "../../Observable.js";
import { Function1 } from "../../functions.js";
import { ContainerOf, ContainerOperator, HigherOrderObservableTypeClass, ObserverLike } from "../../types.js";
declare const Observable_switchAll: <C extends Observable.ObservableContainer, CInner extends DeferredObservable.DeferredObservableContainer>(lift: <T>(f: Function1<ObserverLike<T>, ObserverLike<ContainerOf<CInner, T>>>) => ContainerOperator<C, ContainerOf<CInner, T>, T>) => <T_1>() => ContainerOperator<C, ContainerOf<CInner, T_1>, T_1>;
export default Observable_switchAll;
