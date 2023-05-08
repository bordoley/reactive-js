import { Containers, DeferredContainers, ObservableContainer, ObserverLike } from "../../../core.js";
import { Function1 } from "../../../functions.js";
declare const HigherOrderObservable_switchAll: <C extends ObservableContainer>(lift: <T>(f: Function1<ObserverLike<T>, ObserverLike<Containers.Of<C, T>>>) => Containers.Operator<C, Containers.Of<C, T>, T>) => <T_1>() => Containers.Operator<C, Containers.Of<C, T_1>, T_1>;
export default HigherOrderObservable_switchAll;
