import type * as DeferredObservable from "../../DeferredObservable.js";
import type * as Observable from "../../Observable.js";
import { Factory, Function2, SideEffect1 } from "../../functions.js";
import { HigherOrderObservableBaseTypeClass } from "../../type-classes.js";
import { ContainerOf, ContainerOperator, ObserverLike } from "../../types.js";
declare const HigherOrderObservable_scanMany: <C extends Observable.ObservableContainer, CInner extends DeferredObservable.DeferredObservableContainer>(createObservable: <T>(f: SideEffect1<ObserverLike<T>>) => ContainerOf<C, T>) => <T_1, TAcc>(scanner: Function2<TAcc, T_1, ContainerOf<CInner, TAcc>>, initialValue: Factory<TAcc>) => ContainerOperator<C, T_1, TAcc>;
export default HigherOrderObservable_scanMany;
