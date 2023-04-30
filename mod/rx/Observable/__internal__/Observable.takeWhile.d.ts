import { ContainerOperator } from "../../../containers.js";
import { Predicate } from "../../../functions.js";
import { ObservableContainerLike } from "../../../rx.js";
type ObservableTakeWhile = <C extends ObservableContainerLike, T>(predicate: Predicate<T>, options?: {
    readonly inclusive?: boolean;
}) => ContainerOperator<C, T, T>;
declare const Observable_takeWhile: ObservableTakeWhile;
export default Observable_takeWhile;
