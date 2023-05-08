import { Container, ObservableContainer, ObserverLike, ReactiveContainer } from "../../../core.js";
import { Factory, Function2, SideEffect1 } from "../../../functions.js";
declare const HigherOrderObservable_scanMany: <C extends ObservableContainer>(createObservable: <T>(f: SideEffect1<ObserverLike<T>>) => Container.Of<C, T>) => <T_1, TAcc>(scanner: Function2<TAcc, T_1, Container.Of<C, TAcc>>, initialValue: Factory<TAcc>) => Container.Operator<C, T_1, TAcc>;
export default HigherOrderObservable_scanMany;
