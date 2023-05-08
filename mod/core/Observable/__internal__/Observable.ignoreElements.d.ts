import { Container, ObservableContainer } from "../../../core.js";
type ObservableIgnoreElements = <C extends ObservableContainer, T>() => Container.Operator<C, unknown, T>;
declare const Observable_ignoreElements: ObservableIgnoreElements;
export default Observable_ignoreElements;
