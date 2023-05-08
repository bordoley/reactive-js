import { Container, EnumerableContainer, EnumerableLike, ObservableContainer, ObservableLike, RunnableContainer, RunnableLike } from "../../../core.js";
interface ObservableTakeUntil {
    takeUntil<T>(notifier: EnumerableLike): Container.Operator<EnumerableContainer, T, T>;
    takeUntil<T>(notifier: RunnableLike): Container.Operator<RunnableContainer, T, T>;
    takeUntil<T>(notifier: ObservableLike): Container.Operator<ObservableContainer, T, T>;
}
declare const Observable_takeUntil: ObservableTakeUntil["takeUntil"];
export default Observable_takeUntil;
