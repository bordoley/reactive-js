import { ContainerOf, ContainerOperator } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
import { FromReadonlyArray, ObservableLike, ObserverLike } from "../../../rx.js";
declare const HigherOrderObservable_throttle: <C extends ObservableLike<unknown>, T>(fromReadonlyArray: <T_1>(options?: {
    readonly count?: number | undefined;
    readonly delay?: number | undefined;
    readonly delayStart?: boolean | undefined;
    readonly start?: number | undefined;
} | undefined) => Function1<readonly T_1[], ContainerOf<C, T_1>>, lift: <T_2>(f: Function1<ObserverLike<T_2>, ObserverLike<T_2>>) => ContainerOperator<C, T_2, T_2>) => (duration: number | Function1<T, ContainerOf<C, unknown>>, options?: {
    readonly mode?: "first" | "last" | "interval";
}) => ContainerOperator<C, T, T>;
export default HigherOrderObservable_throttle;
