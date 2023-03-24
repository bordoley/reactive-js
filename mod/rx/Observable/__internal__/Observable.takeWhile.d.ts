import { ContainerOperator } from "../../../containers.js";
import { Predicate } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
type ObservableTakeWhile = <C extends ObservableLike, T>(predicate: Predicate<T>, options?: {
    readonly inclusive?: boolean | undefined;
}) => ContainerOperator<C, T, T>;
declare const Observable_takeWhile: ObservableTakeWhile;
export default Observable_takeWhile;
