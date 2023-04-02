import { ContainerOperator } from "../../../containers.js";
import { Equality } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
type ObservableContains = <C extends ObservableLike, T>(value: T, options?: {
    readonly equality?: Equality<T> | undefined;
}) => ContainerOperator<C, T, boolean>;
declare const Observable_contains: ObservableContains;
export default Observable_contains;
