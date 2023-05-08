import { Container } from "../../../core.js";
declare const Container_ignoreElements: <C extends Container>(keep: <T>(predicate: import("../../../functions.js").Predicate<T>) => Container.Operator<C, T, T>) => <T_1>() => Container.Operator<C, unknown, T_1>;
export default Container_ignoreElements;
