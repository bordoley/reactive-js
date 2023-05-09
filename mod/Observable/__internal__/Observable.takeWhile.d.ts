import { Containers, ObservableContainer } from "../../containers.js";
import { Predicate } from "../../functions.js";
type ObservableTakeWhile = <C extends ObservableContainer.Type, T>(predicate: Predicate<T>, options?: {
    readonly inclusive?: boolean;
}) => Containers.Operator<C, T, T>;
declare const Observable_takeWhile: ObservableTakeWhile;
export default Observable_takeWhile;
