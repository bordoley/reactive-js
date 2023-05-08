import { Container, ObservableContainer, ObserverLike, ReactiveContainer } from "../../../core.js";
import { Function1 } from "../../../functions.js";
declare const HigherOrderObservable_catchError: <C extends ObservableContainer>(lift: <T>(f: Function1<ObserverLike<T>, ObserverLike<T>>) => Container.Operator<C, T, T>) => <T_1>(onError: Function1<unknown, void | Container.Of<C, T_1>>) => Container.Operator<C, T_1, T_1>;
export default HigherOrderObservable_catchError;
