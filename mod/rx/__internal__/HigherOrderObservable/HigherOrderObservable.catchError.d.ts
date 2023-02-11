import { ContainerOperator, ContainerOf } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
import { ObservableLike, ObserverLike } from "../../../rx.js";
declare const HigherOrderObservable_catchError: <C extends ObservableLike<unknown>>(lift: <T>(f: Function1<ObserverLike<T>, ObserverLike<T>>) => ContainerOperator<C, T, T>) => <T_1>(onError: Function1<unknown, void | ContainerOf<C, T_1>>, options?: undefined) => ContainerOperator<C, T_1, T_1>;
export { HigherOrderObservable_catchError as default };
