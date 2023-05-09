import { Containers, ObservableContainer } from "../../containers.js";
import { Equality } from "../../functions.js";
type ObservableDistinctUntilChanged = <C extends ObservableContainer, T>(options?: {
    readonly equality?: Equality<T>;
}) => Containers.Operator<C, T, T>;
declare const Observable_distinctUntilChanged: ObservableDistinctUntilChanged;
export default Observable_distinctUntilChanged;
