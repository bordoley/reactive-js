import { ContainerOf, ContainerOperator } from "../../../containers.js";
import { Factory, Function2, SideEffect1 } from "../../../functions.js";
import { ObservableLike, ObserverLike, ScanMany } from "../../../rx.js";
declare const HigherOrderObservable_scanMany: <C extends ObservableLike<unknown>>(createObservable: <T>(f: SideEffect1<ObserverLike<T>>) => ContainerOf<C, T>) => <T_1, TAcc>(scanner: Function2<TAcc, T_1, ContainerOf<C, TAcc>>, initialValue: Factory<TAcc>) => ContainerOperator<C, T_1, TAcc>;
export default HigherOrderObservable_scanMany;
