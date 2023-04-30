import { ContainerOperator } from "../../../containers.js";
import { ObservableContainerLike } from "../../../rx.js";
type ObservableIgnoreElements = <C extends ObservableContainerLike, T>() => ContainerOperator<C, unknown, T>;
declare const Observable_ignoreElements: ObservableIgnoreElements;
export default Observable_ignoreElements;
