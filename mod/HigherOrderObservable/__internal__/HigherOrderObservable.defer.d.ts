import { Factory, SideEffect1 } from "../../functions.js";
import { Containers, ObservableContainer, ObserverLike, StatefulContainers } from "../../types.js";
declare const HigherOrderObservable_defer: <C extends ObservableContainer>(createObservable: <T>(f: SideEffect1<ObserverLike<T>>) => Containers.Of<C, T>) => <T_1>(factory: Factory<Containers.Of<C, T_1>>) => Containers.Of<C, T_1>;
export default HigherOrderObservable_defer;
