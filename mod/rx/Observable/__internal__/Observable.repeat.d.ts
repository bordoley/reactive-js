import { ContainerOperator } from "../../../containers.js";
import { Predicate } from "../../../functions.js";
import { ObservableContainerLike } from "../../../rx.js";
interface RepeatObservable {
    repeat<C extends ObservableContainerLike, T>(predicate: Predicate<number>): ContainerOperator<C, T, T>;
    repeat<C extends ObservableContainerLike, T>(count?: number): ContainerOperator<C, T, T>;
    repeat<C extends ObservableContainerLike, T>(): ContainerOperator<C, T, T>;
}
declare const Observable_repeat: RepeatObservable["repeat"];
export default Observable_repeat;
