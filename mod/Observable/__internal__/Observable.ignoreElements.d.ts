import { Containers, ObservableContainer } from "../../containers.js";
type ObservableIgnoreElements = <C extends ObservableContainer, T>() => Containers.Operator<C, unknown, T>;
declare const Observable_ignoreElements: ObservableIgnoreElements;
export default Observable_ignoreElements;
