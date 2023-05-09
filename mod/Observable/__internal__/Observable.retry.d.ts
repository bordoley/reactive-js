import { Container, ObservableContainer } from "../../containers.js";
import { Function2 } from "../../functions.js";
interface ObservableRetry {
    retry<C extends ObservableContainer.Type, T>(): Container.Operator<C, T, T>;
    retry<C extends ObservableContainer.Type, T>(predicate: Function2<number, unknown, boolean>): Container.Operator<C, T, T>;
}
declare const Observable_retry: ObservableRetry["retry"];
export default Observable_retry;
