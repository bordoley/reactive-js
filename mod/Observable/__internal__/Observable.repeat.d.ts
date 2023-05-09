import { Container, ObservableContainer } from "../../containers.js";
import { Predicate } from "../../functions.js";
interface RepeatObservable {
    repeat<C extends ObservableContainer.Type, T>(predicate: Predicate<number>): Container.Operator<C, T, T>;
    repeat<C extends ObservableContainer.Type, T>(count?: number): Container.Operator<C, T, T>;
    repeat<C extends ObservableContainer.Type, T>(): Container.Operator<C, T, T>;
}
declare const Observable_repeat: RepeatObservable["repeat"];
export default Observable_repeat;
