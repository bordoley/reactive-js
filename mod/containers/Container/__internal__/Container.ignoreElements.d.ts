import { Container, ContainerOperator, Keep } from "../../../containers.js";
declare const Container_ignoreElements: <C extends Container>(keep: <T>(predicate: import("../../../functions.js").Predicate<T>) => ContainerOperator<C, T, T>) => <T_1>() => ContainerOperator<C, unknown, T_1>;
export default Container_ignoreElements;
