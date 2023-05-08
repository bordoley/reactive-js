import { Containers, ObservableContainer, ObserverLike, ReactiveContainers } from "../../../core.js";
import { Factory, SideEffect1 } from "../../../functions.js";
declare const HigherOrderObservable_defer: <C extends ObservableContainer>(createObservable: <T>(f: SideEffect1<ObserverLike<T>>) => Containers.Of<C, T>) => <T_1>(factory: Factory<Containers.Of<C, T_1>>) => Containers.Of<C, T_1>;
export default HigherOrderObservable_defer;
