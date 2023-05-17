import { Function1, Function2 } from "../../functions.js";
import { ContainerOf, ContainerOperator, DeferredObservableContainer, ObserverLike } from "../../types.js";
declare const Observable_catchErrorWithFallback: <C extends import("../../types.js").ObservableContainer, CInner extends DeferredObservableContainer>(lift: <T>(f: Function1<ObserverLike<T>, ObserverLike<T>>) => ContainerOperator<C, T, T>) => <T_1>(errorHandler: Function2<Error, ContainerOf<C, T_1>, ContainerOf<CInner, T_1>>) => ContainerOperator<C, T_1, T_1>;
export default Observable_catchErrorWithFallback;
