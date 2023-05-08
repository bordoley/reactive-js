import { Container, ObservableContainer, ObservableLike, RunnableContainer, RunnableLike } from "../../../core.js";
interface ObservableTimeout {
    timeout<C extends ObservableContainer, T>(duration: number): Container.Operator<C, T, T>;
    timeout<T>(duration: RunnableLike): Container.Operator<RunnableContainer, T, T>;
    timeout<T>(duration: ObservableLike): Container.Operator<ObservableContainer, T, T>;
}
declare const Observable_timeout: ObservableTimeout["timeout"];
export default Observable_timeout;
