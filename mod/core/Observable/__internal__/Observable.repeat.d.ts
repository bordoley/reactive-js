import { Container, ObservableContainer } from "../../../core.js";
import { Predicate } from "../../../functions.js";
interface RepeatObservable {
    repeat<C extends ObservableContainer, T>(predicate: Predicate<number>): Container.Operator<C, T, T>;
    repeat<C extends ObservableContainer, T>(count?: number): Container.Operator<C, T, T>;
    repeat<C extends ObservableContainer, T>(): Container.Operator<C, T, T>;
}
declare const Observable_repeat: RepeatObservable["repeat"];
export default Observable_repeat;
