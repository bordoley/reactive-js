import { ContainerOperator } from "../../../containers.js";
import { Predicate } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
type ObservableSomeSatisfy = <C extends ObservableLike, T>(predicate: Predicate<T>) => ContainerOperator<C, T, boolean>;
declare const Observable_someSatisfy: ObservableSomeSatisfy;
export default Observable_someSatisfy;
