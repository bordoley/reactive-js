import { ContainerOperator } from "../../../containers.js";
import { EnumerableContainerLike, EnumerableLike, ObservableContainerLike, ObservableLike, RunnableContainerLike, RunnableLike } from "../../../rx.js";
interface ObservableTakeUntil {
    takeUntil<T>(notifier: EnumerableLike): ContainerOperator<EnumerableContainerLike, T, T>;
    takeUntil<T>(notifier: RunnableLike): ContainerOperator<RunnableContainerLike, T, T>;
    takeUntil<T>(notifier: ObservableLike): ContainerOperator<ObservableContainerLike, T, T>;
}
declare const Observable_takeUntil: ObservableTakeUntil["takeUntil"];
export default Observable_takeUntil;
