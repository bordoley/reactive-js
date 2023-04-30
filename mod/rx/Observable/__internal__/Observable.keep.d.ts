import { ContainerOperator } from "../../../containers.js";
import { Predicate } from "../../../functions.js";
import { ObservableContainerLike } from "../../../rx.js";
type ObservableKeep = <C extends ObservableContainerLike, T>(predicate: Predicate<T>, options?: undefined) => ContainerOperator<C, T, T>;
declare const Observable_keep: ObservableKeep;
export default Observable_keep;
