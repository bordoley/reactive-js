import { Containers, ObservableContainer, StatefulTypeClass } from "../../containers.js";
import { Function1 } from "../../functions.js";
import { ObserverLike } from "../../types.js";
declare const HigherOrderObservable_catchError: <C extends ObservableContainer.Type>(lift: <T>(f: Function1<ObserverLike<T>, ObserverLike<T>>) => Containers.Operator<C, T, T>) => <T_1>(onError: Function1<unknown, void | Containers.Of<C, T_1>>) => Containers.Operator<C, T_1, T_1>;
export default HigherOrderObservable_catchError;
