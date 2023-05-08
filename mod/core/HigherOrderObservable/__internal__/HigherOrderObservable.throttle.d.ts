import { Container, ObservableContainer, ObserverLike } from "../../../core.js";
import { Function1 } from "../../../functions.js";
declare const HigherOrderObservable_throttle: <C extends ObservableContainer, T>(fromReadonlyArray: <T_1>(options?: {
    readonly count?: number;
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
}) => Function1<readonly T_1[], Container.Of<C, T_1>>, lift: <T_2>(f: Function1<ObserverLike<T_2>, ObserverLike<T_2>>) => Container.Operator<C, T_2, T_2>) => (duration: number | Function1<T, Container.Of<C, unknown>>, options?: {
    readonly mode?: "first" | "last" | "interval";
}) => Container.Operator<C, T, T>;
export default HigherOrderObservable_throttle;
