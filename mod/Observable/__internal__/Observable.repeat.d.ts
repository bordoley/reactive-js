import { Containers, ObservableContainer } from "../../containers.js";
import { Predicate } from "../../functions.js";
interface RepeatObservable {
    repeat<C extends ObservableContainer.Type, T>(predicate: Predicate<number>): Containers.Operator<C, T, T>;
    repeat<C extends ObservableContainer.Type, T>(count?: number): Containers.Operator<C, T, T>;
    repeat<C extends ObservableContainer.Type, T>(): Containers.Operator<C, T, T>;
}
declare const Observable_repeat: RepeatObservable["repeat"];
export default Observable_repeat;
