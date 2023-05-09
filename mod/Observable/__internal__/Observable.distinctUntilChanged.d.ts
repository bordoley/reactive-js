import { Container, ObservableContainer } from "../../containers.js";
import { Equality } from "../../functions.js";
type ObservableDistinctUntilChanged = <C extends ObservableContainer.Type, T>(options?: {
    readonly equality?: Equality<T>;
}) => Container.Operator<C, T, T>;
declare const Observable_distinctUntilChanged: ObservableDistinctUntilChanged;
export default Observable_distinctUntilChanged;
