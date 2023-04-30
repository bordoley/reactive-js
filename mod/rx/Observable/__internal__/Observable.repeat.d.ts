import { ContainerOperator } from "../../../containers.js";
import { Predicate } from "../../../functions.js";
import { ObservableContainer } from "../../../rx.js";
interface RepeatObservable {
    repeat<C extends ObservableContainer, T>(predicate: Predicate<number>): ContainerOperator<C, T, T>;
    repeat<C extends ObservableContainer, T>(count?: number): ContainerOperator<C, T, T>;
    repeat<C extends ObservableContainer, T>(): ContainerOperator<C, T, T>;
}
declare const Observable_repeat: RepeatObservable["repeat"];
export default Observable_repeat;
