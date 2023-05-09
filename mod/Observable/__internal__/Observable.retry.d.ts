import { Containers, ObservableContainer } from "../../containers.js";
import { Function2 } from "../../functions.js";
interface ObservableRetry {
    retry<C extends ObservableContainer.Type, T>(): Containers.Operator<C, T, T>;
    retry<C extends ObservableContainer.Type, T>(predicate: Function2<number, unknown, boolean>): Containers.Operator<C, T, T>;
}
declare const Observable_retry: ObservableRetry["retry"];
export default Observable_retry;
