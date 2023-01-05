import { ContainerOf, ContainerOperator } from "../../../containers.mjs";
import { Function1 } from "../../../functions.mjs";
import { ObservableLike, ObserverLike } from "../../../rx.mjs";
declare const HigherOrderObservableLike__mergeAll: <C extends ObservableLike<unknown>>(lift: <T>(f: Function1<ObserverLike<T>, ObserverLike<ContainerOf<C, T>>>) => ContainerOperator<C, ContainerOf<C, T>, T>) => <T_1>(options?: undefined) => ContainerOperator<C, ContainerOf<C, T_1>, T_1>;
export { HigherOrderObservableLike__mergeAll as default };
