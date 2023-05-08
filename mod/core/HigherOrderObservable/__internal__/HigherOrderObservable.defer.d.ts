import { Container, ObservableContainer, ObserverLike, ReactiveContainer } from "../../../core.js";
import { Factory, SideEffect1 } from "../../../functions.js";
declare const HigherOrderObservable_defer: <C extends ObservableContainer>(createObservable: <T>(f: SideEffect1<ObserverLike<T>>) => Container.Of<C, T>) => <T_1>(factory: Factory<Container.Of<C, T_1>>) => Container.Of<C, T_1>;
export default HigherOrderObservable_defer;
