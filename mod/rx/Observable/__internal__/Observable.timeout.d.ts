import { ContainerOperator } from "../../../containers.js";
import { ObservableContainer, ObservableLike, RunnableContainer, RunnableLike } from "../../../rx.js";
interface ObservableTimeout {
    timeout<C extends ObservableContainer, T>(duration: number): ContainerOperator<C, T, T>;
    timeout<T>(duration: RunnableLike): ContainerOperator<RunnableContainer, T, T>;
    timeout<T>(duration: ObservableLike): ContainerOperator<ObservableContainer, T, T>;
}
declare const Observable_timeout: ObservableTimeout["timeout"];
export default Observable_timeout;
