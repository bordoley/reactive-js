import { Predicate } from "../../functions.js";
import { Containers, ObservableContainer } from "../../types.js";
type ObservableKeep = <C extends ObservableContainer, T>(predicate: Predicate<T>, options?: undefined) => Containers.Operator<C, T, T>;
declare const Observable_keep: ObservableKeep;
export default Observable_keep;
