import { Container, EnumerableContainer, ObservableContainer, RunnableContainer } from "../../containers.js";
import { EnumerableLike, ObservableLike, RunnableLike } from "../../types.js";
interface ObservableTakeUntil {
    takeUntil<T>(notifier: EnumerableLike): Container.Operator<EnumerableContainer.Type, T, T>;
    takeUntil<T>(notifier: RunnableLike): Container.Operator<RunnableContainer.Type, T, T>;
    takeUntil<T>(notifier: ObservableLike): Container.Operator<ObservableContainer.Type, T, T>;
}
declare const Observable_takeUntil: ObservableTakeUntil["takeUntil"];
export default Observable_takeUntil;
