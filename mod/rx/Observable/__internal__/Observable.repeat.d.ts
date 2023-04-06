import { ContainerOperator } from "../../../containers.js";
import { Predicate } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
interface RepeatObservable {
    repeat<C extends ObservableLike, T>(predicate: Predicate<number>): ContainerOperator<C, T, T>;
    repeat<C extends ObservableLike, T>(count?: number): ContainerOperator<C, T, T>;
    repeat<C extends ObservableLike, T>(): ContainerOperator<C, T, T>;
}
declare const Observable_repeat: RepeatObservable["repeat"];
export default Observable_repeat;
