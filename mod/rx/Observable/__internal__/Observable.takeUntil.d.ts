import { ContainerOperator } from "../../../containers.js";
import { EnumerableContainer, EnumerableLike, ObservableContainer, ObservableLike, RunnableContainer, RunnableLike } from "../../../rx.js";
interface ObservableTakeUntil {
    takeUntil<T>(notifier: EnumerableLike): ContainerOperator<EnumerableContainer, T, T>;
    takeUntil<T>(notifier: RunnableLike): ContainerOperator<RunnableContainer, T, T>;
    takeUntil<T>(notifier: ObservableLike): ContainerOperator<ObservableContainer, T, T>;
}
declare const Observable_takeUntil: ObservableTakeUntil["takeUntil"];
export default Observable_takeUntil;
