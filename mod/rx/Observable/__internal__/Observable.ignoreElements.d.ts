import { ContainerOperator } from "../../../containers.js";
import { ObservableContainer } from "../../../rx.js";
type ObservableIgnoreElements = <C extends ObservableContainer, T>() => ContainerOperator<C, unknown, T>;
declare const Observable_ignoreElements: ObservableIgnoreElements;
export default Observable_ignoreElements;
