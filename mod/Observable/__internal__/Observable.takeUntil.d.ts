import { Containers, EnumerableContainer, ObservableContainer, RunnableContainer } from "../../containers.js";
import { EnumerableLike, ObservableLike, RunnableLike } from "../../types.js";
interface ObservableTakeUntil {
    takeUntil<T>(notifier: EnumerableLike): Containers.Operator<EnumerableContainer, T, T>;
    takeUntil<T>(notifier: RunnableLike): Containers.Operator<RunnableContainer, T, T>;
    takeUntil<T>(notifier: ObservableLike): Containers.Operator<ObservableContainer, T, T>;
}
declare const Observable_takeUntil: ObservableTakeUntil["takeUntil"];
export default Observable_takeUntil;
