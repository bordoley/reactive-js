import { Equality } from "../../functions.js";
import { Containers, ObservableContainer } from "../../types.js";
type ObservableDistinctUntilChanged = <C extends ObservableContainer, T>(options?: {
    readonly equality?: Equality<T>;
}) => Containers.Operator<C, T, T>;
declare const Observable_distinctUntilChanged: ObservableDistinctUntilChanged;
export default Observable_distinctUntilChanged;
