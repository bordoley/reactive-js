import { Container, ContainerTypeClass, Containers } from "../../containers.js";
declare const Container_ignoreElements: <C extends Container>(keep: <T>(predicate: import("../../functions.js").Predicate<T>) => Containers.Operator<C, T, T>) => <T_1>() => Containers.Operator<C, unknown, T_1>;
export default Container_ignoreElements;
