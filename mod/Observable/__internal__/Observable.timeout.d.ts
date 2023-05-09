import { Container, ObservableContainer, RunnableContainer } from "../../containers.js";
import { ObservableLike, RunnableLike } from "../../types.js";
interface ObservableTimeout {
    timeout<C extends ObservableContainer.Type, T>(duration: number): Container.Operator<C, T, T>;
    timeout<T>(duration: RunnableLike): Container.Operator<RunnableContainer.Type, T, T>;
    timeout<T>(duration: ObservableLike): Container.Operator<ObservableContainer.Type, T, T>;
}
declare const Observable_timeout: ObservableTimeout["timeout"];
export default Observable_timeout;
