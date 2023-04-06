import { ContainerOperator } from "../../../containers.js";
import { EnumerableLike, ObservableLike, RunnableLike } from "../../../rx.js";
interface ObservableTakeUntil {
    takeUntil<T>(notifier: EnumerableLike): ContainerOperator<EnumerableLike, T, T>;
    takeUntil<T>(notifier: RunnableLike): ContainerOperator<RunnableLike, T, T>;
    takeUntil<T>(notifier: ObservableLike): ContainerOperator<ObservableLike, T, T>;
}
declare const Observable_takeUntil: ObservableTakeUntil["takeUntil"];
export default Observable_takeUntil;
