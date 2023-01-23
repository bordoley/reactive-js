import { ContainerLike, SomeSatisfy, ContainerOperator } from "../../../containers.js";
import { Equality } from "../../../functions.js";
declare const ContainerLike__contains: <C extends ContainerLike, T>({ someSatisfy }: SomeSatisfy<C>, value: T, options?: {
    readonly equality?: Equality<T> | undefined;
}) => ContainerOperator<C, T, boolean>;
export { ContainerLike__contains as default };
