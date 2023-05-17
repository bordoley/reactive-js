import type * as DeferredObservable from "../../DeferredObservable.js";
import type * as Observable from "../../Observable.js";
import { Function1, Function2 } from "../../functions.js";
import { ContainerOf, ContainerOperator, ObserverLike } from "../../types.js";
declare const Observable_catchErrorWithFallback: <C extends Observable.ObservableContainer, CInner extends DeferredObservable.DeferredObservableContainer>(lift: <T>(f: Function1<ObserverLike<T>, ObserverLike<T>>) => ContainerOperator<C, T, T>) => <T_1>(errorHandler: Function2<Error, ContainerOf<C, T_1>, ContainerOf<CInner, T_1>>) => ContainerOperator<C, T_1, T_1>;
export default Observable_catchErrorWithFallback;
