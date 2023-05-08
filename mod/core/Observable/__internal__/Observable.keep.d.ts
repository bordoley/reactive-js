import { Containers, ObservableContainer } from "../../../core.js";
import { Predicate } from "../../../functions.js";
type ObservableKeep = <C extends ObservableContainer, T>(predicate: Predicate<T>, options?: undefined) => Containers.Operator<C, T, T>;
declare const Observable_keep: ObservableKeep;
export default Observable_keep;
