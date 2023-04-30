import { ContainerOperator } from "../../../containers.js";
import { Predicate } from "../../../functions.js";
import { ObservableContainer } from "../../../rx.js";
type ObservableKeep = <C extends ObservableContainer, T>(predicate: Predicate<T>, options?: undefined) => ContainerOperator<C, T, T>;
declare const Observable_keep: ObservableKeep;
export default Observable_keep;
