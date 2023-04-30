import { ContainerOperator } from "../../../containers.js";
import { ObservableContainerLike, ObservableLike, RunnableContainerLike, RunnableLike } from "../../../rx.js";
interface ObservableTimeout {
    timeout<C extends ObservableContainerLike, T>(duration: number): ContainerOperator<C, T, T>;
    timeout<T>(duration: RunnableLike): ContainerOperator<RunnableContainerLike, T, T>;
    timeout<T>(duration: ObservableLike): ContainerOperator<ObservableContainerLike, T, T>;
}
declare const Observable_timeout: ObservableTimeout["timeout"];
export default Observable_timeout;
