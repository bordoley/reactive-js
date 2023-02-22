import { ContainerLike, ContainerOperator, Keep } from "../../../containers.js";
declare const Container_ignoreElements: <C extends ContainerLike>(keep: <T>(predicate: import("../../../functions.js").Predicate<T>, options?: undefined) => ContainerOperator<C, T, T>) => <T_1>() => ContainerOperator<C, unknown, T_1>;
export default Container_ignoreElements;
