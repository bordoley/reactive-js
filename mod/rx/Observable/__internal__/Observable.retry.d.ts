import { ContainerOperator } from "../../../containers.js";
import { Function2 } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
interface ObservableRetry {
    <C extends ObservableLike, T>(): ContainerOperator<C, T, T>;
    <C extends ObservableLike, T>(predicate: Function2<number, unknown, boolean>): ContainerOperator<C, T, T>;
}
declare const Observable_retry: ObservableRetry;
export default Observable_retry;
