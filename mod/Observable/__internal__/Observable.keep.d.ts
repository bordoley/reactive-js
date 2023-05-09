import { Containers, ObservableContainer } from "../../containers.js";
import { Predicate } from "../../functions.js";
type ObservableKeep = <C extends ObservableContainer.Type, T>(predicate: Predicate<T>, options?: undefined) => Containers.Operator<C, T, T>;
declare const Observable_keep: ObservableKeep;
export default Observable_keep;
