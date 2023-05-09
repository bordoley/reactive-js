import { Containers, ObservableContainer, RunnableContainer } from "../../containers.js";
import { ObservableLike, RunnableLike } from "../../types.js";
interface ObservableTimeout {
    timeout<C extends ObservableContainer, T>(duration: number): Containers.Operator<C, T, T>;
    timeout<T>(duration: RunnableLike): Containers.Operator<RunnableContainer, T, T>;
    timeout<T>(duration: ObservableLike): Containers.Operator<ObservableContainer, T, T>;
}
declare const Observable_timeout: ObservableTimeout["timeout"];
export default Observable_timeout;
