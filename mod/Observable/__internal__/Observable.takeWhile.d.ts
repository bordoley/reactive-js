import { Predicate } from "../../functions.js";
import { Containers, ObservableContainer } from "../../types.js";
type ObservableTakeWhile = <C extends ObservableContainer, T>(predicate: Predicate<T>, options?: {
    readonly inclusive?: boolean;
}) => Containers.Operator<C, T, T>;
declare const Observable_takeWhile: ObservableTakeWhile;
export default Observable_takeWhile;
