import { Factory, Function2, SideEffect1 } from "../../functions.js";
import { HigherOrderObservableBaseTypeClass } from "../../type-classes.js";
import { ContainerOf, ContainerOperator, ObserverLike } from "../../types.js";
declare const Observable_scanLast: <C extends import("../../types.js").ObservableContainer, CInner extends import("../../types.js").DeferredObservableContainer>(createObservable: <T>(f: SideEffect1<ObserverLike<T>>) => ContainerOf<C, T>) => <T_1, TAcc>(scanner: Function2<TAcc, T_1, ContainerOf<CInner, TAcc>>, initialValue: Factory<TAcc>) => ContainerOperator<C, T_1, TAcc>;
export default Observable_scanLast;
