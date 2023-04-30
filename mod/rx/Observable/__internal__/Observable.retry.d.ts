import { ContainerOperator } from "../../../containers.js";
import { Function2 } from "../../../functions.js";
import { ObservableContainer } from "../../../rx.js";
interface ObservableRetry {
    retry<C extends ObservableContainer, T>(): ContainerOperator<C, T, T>;
    retry<C extends ObservableContainer, T>(predicate: Function2<number, unknown, boolean>): ContainerOperator<C, T, T>;
}
declare const Observable_retry: ObservableRetry["retry"];
export default Observable_retry;
