import { Containers, ObservableContainer } from "../../../core.js";
import { Function2 } from "../../../functions.js";
interface ObservableRetry {
    retry<C extends ObservableContainer, T>(): Containers.Operator<C, T, T>;
    retry<C extends ObservableContainer, T>(predicate: Function2<number, unknown, boolean>): Containers.Operator<C, T, T>;
}
declare const Observable_retry: ObservableRetry["retry"];
export default Observable_retry;
