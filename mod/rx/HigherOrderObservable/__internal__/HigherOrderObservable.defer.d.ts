import { ContainerOf } from "../../../containers.js";
import { Factory, SideEffect1 } from "../../../functions.js";
import { Defer, ObservableContainerLike, ObserverLike } from "../../../rx.js";
declare const HigherOrderObservable_defer: <C extends ObservableContainerLike<unknown>>(createObservable: <T>(f: SideEffect1<ObserverLike<T>>) => ContainerOf<C, T>) => <T_1>(factory: Factory<ContainerOf<C, T_1>>) => ContainerOf<C, T_1>;
export default HigherOrderObservable_defer;
