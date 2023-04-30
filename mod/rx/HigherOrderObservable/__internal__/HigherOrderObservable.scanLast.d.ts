import { ContainerOf, ContainerOperator } from "../../../containers.js";
import { Factory, Function2, SideEffect1 } from "../../../functions.js";
import { ObservableContainerLike, ObserverLike, ScanLast } from "../../../rx.js";
declare const HigherOrderObservable_scanLast: <C extends ObservableContainerLike>(createObservable: <T>(f: SideEffect1<ObserverLike<T>>) => ContainerOf<C, T>) => <T_1, TAcc>(scanner: Function2<TAcc, T_1, ContainerOf<C, TAcc>>, initialValue: Factory<TAcc>) => ContainerOperator<C, T_1, TAcc>;
export default HigherOrderObservable_scanLast;
