import { ContainerOperator } from "../../../containers.js";
import { Equality } from "../../../functions.js";
import { ObservableContainerLike } from "../../../rx.js";
type ObservableDistinctUntilChanged = <C extends ObservableContainerLike, T>(options?: {
    readonly equality?: Equality<T>;
}) => ContainerOperator<C, T, T>;
declare const Observable_distinctUntilChanged: ObservableDistinctUntilChanged;
export default Observable_distinctUntilChanged;
