import { ContainerLike, SomeSatisfy, ContainerOperator } from "../../../containers.js";
import { Equality } from "../../../functions.js";
declare const Container$contains: <C extends ContainerLike, T>({ someSatisfy }: SomeSatisfy<C>, value: T, options?: {
    readonly equality?: Equality<T> | undefined;
}) => ContainerOperator<C, T, boolean>;
export { Container$contains as default };
