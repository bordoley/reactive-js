import { ContainerOperator } from "../../../containers.js";
import { EnumerableLike, ObservableLike, RunnableLike } from "../../../rx.js";
interface ObservableTakeUntil {
    <T>(notifier: EnumerableLike): ContainerOperator<EnumerableLike, T, T>;
    <T>(notifier: RunnableLike): ContainerOperator<RunnableLike, T, T>;
    <T>(notifier: ObservableLike): ContainerOperator<ObservableLike, T, T>;
}
declare const Observable_takeUntil: ObservableTakeUntil;
export default Observable_takeUntil;
