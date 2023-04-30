import { ContainerOf, ContainerOperator } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
import { ObservableContainer, ObserverLike } from "../../../rx.js";
declare const HigherOrderObservable_throttle: <C extends ObservableContainer, T>(fromReadonlyArray: <T_1>(options?: {
    readonly count?: number;
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
}) => Function1<readonly T_1[], ContainerOf<C, T_1>>, lift: <T_2>(f: Function1<ObserverLike<T_2>, ObserverLike<T_2>>) => ContainerOperator<C, T_2, T_2>) => (duration: number | Function1<T, ContainerOf<C, unknown>>, options?: {
    readonly mode?: "first" | "last" | "interval";
}) => ContainerOperator<C, T, T>;
export default HigherOrderObservable_throttle;
