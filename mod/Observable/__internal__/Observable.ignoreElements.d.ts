import { Container, ObservableContainer } from "../../containers.js";
type ObservableIgnoreElements = <C extends ObservableContainer.Type, T>() => Container.Operator<C, unknown, T>;
declare const Observable_ignoreElements: ObservableIgnoreElements;
export default Observable_ignoreElements;
