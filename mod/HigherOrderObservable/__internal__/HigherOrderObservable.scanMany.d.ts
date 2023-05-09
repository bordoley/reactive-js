import { Factory, Function2, SideEffect1 } from "../../functions.js";
import { Containers, ObservableContainer, ObservableContainers, ObserverLike } from "../../types.js";
declare const HigherOrderObservable_scanMany: <C extends ObservableContainer>(createObservable: <T>(f: SideEffect1<ObserverLike<T>>) => Containers.Of<C, T>) => <T_1, TAcc>(scanner: Function2<TAcc, T_1, Containers.Of<C, TAcc>>, initialValue: Factory<TAcc>) => Containers.Operator<C, T_1, TAcc>;
export default HigherOrderObservable_scanMany;
