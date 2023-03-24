import { ContainerOperator } from "../../../containers.js";
import { ObservableLike, RunnableLike } from "../../../rx.js";
interface ObservableTimeout {
    <C extends ObservableLike, T>(duration: number): ContainerOperator<C, T, T>;
    <T>(duration: RunnableLike): ContainerOperator<RunnableLike, T, T>;
    <T>(duration: ObservableLike): ContainerOperator<ObservableLike, T, T>;
}
declare const Observable_timeout: ObservableTimeout;
export default Observable_timeout;
