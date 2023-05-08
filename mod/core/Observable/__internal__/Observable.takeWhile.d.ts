import { Containers, ObservableContainer } from "../../../core.js";
import { Predicate } from "../../../functions.js";
type ObservableTakeWhile = <C extends ObservableContainer, T>(predicate: Predicate<T>, options?: {
    readonly inclusive?: boolean;
}) => Containers.Operator<C, T, T>;
declare const Observable_takeWhile: ObservableTakeWhile;
export default Observable_takeWhile;
