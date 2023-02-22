import { ContainerOf, ContainerOperator, FromReadonlyArray } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
import { ObservableLike, ObserverLike, ThrottleMode } from "../../../rx.js";
declare const HigherOrderObservable_throttle: <C extends ObservableLike<unknown>, T>(fromReadonlyArray: <T_1>(options?: ({
    delay: number;
    delayStart: boolean;
} & {
    readonly start?: number | undefined;
    readonly count?: number | undefined;
}) | undefined) => Function1<readonly T_1[], ContainerOf<C, T_1>>, lift: <T_2>(f: Function1<ObserverLike<T_2>, ObserverLike<T_2>>) => ContainerOperator<C, T_2, T_2>) => (duration: number | Function1<T, ContainerOf<C, unknown>>, options?: {
    readonly mode?: ThrottleMode;
}) => ContainerOperator<C, T, T>;
export default HigherOrderObservable_throttle;
