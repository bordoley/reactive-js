import { ContainerOperator, ContainerOf } from "../../../containers.mjs";
import { Function1 } from "../../../functions.mjs";
import { ObservableLike, ObserverLike } from "../../../rx.mjs";
declare const HigherOrderObservableLike__catchError: <C extends ObservableLike<unknown>>(lift: <T>(f: Function1<ObserverLike<T>, ObserverLike<T>>) => ContainerOperator<C, T, T>) => <T_1>(onError: Function1<unknown, void | ContainerOf<C, T_1>>) => ContainerOperator<C, T_1, T_1>;
export { HigherOrderObservableLike__catchError as default };
