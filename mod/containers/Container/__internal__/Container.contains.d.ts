import { ContainerLike, SomeSatisfy, ContainerOperator } from "../../../containers.js";
import { Equality } from "../../../functions.js";
declare const Container_contains: <C extends ContainerLike, T>({ someSatisfy }: SomeSatisfy<C, never>, value: T, options?: {
    readonly equality?: Equality<T> | undefined;
}) => ContainerOperator<C, T, boolean>;
export { Container_contains as default };
