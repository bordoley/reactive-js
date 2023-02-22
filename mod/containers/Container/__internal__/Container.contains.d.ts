import { ContainerLike, ContainerOperator, SomeSatisfy } from "../../../containers.js";
import { Equality } from "../../../functions.js";
declare const Container_contains: <C extends ContainerLike>(someSatisfy: <T>(predicate: import("../../../functions.js").Predicate<T>, options?: undefined) => ContainerOperator<C, T, boolean>) => <T_1>(value: T_1, options?: {
    readonly equality?: Equality<T_1> | undefined;
}) => ContainerOperator<C, T_1, boolean>;
export default Container_contains;
