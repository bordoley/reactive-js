import { ContainerOperator } from "../../../containers.js";
import { Predicate } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
type ObservableEverySatisfy = <C extends ObservableLike, T>(predicate: Predicate<T>) => ContainerOperator<C, T, boolean>;
declare const Observable_everySatisfy: ObservableEverySatisfy;
export default Observable_everySatisfy;
