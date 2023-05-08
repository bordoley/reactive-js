import { Containers, ObservableContainer, ObserverLike } from "../../../core.js";
import { Factory, Function2, SideEffect1 } from "../../../functions.js";
declare const HigherOrderObservable_scanLast: <C extends ObservableContainer>(createObservable: <T>(f: SideEffect1<ObserverLike<T>>) => Containers.Of<C, T>) => <T_1, TAcc>(scanner: Function2<TAcc, T_1, Containers.Of<C, TAcc>>, initialValue: Factory<TAcc>) => Containers.Operator<C, T_1, TAcc>;
export default HigherOrderObservable_scanLast;
