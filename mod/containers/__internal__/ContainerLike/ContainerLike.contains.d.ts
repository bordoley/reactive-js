import { ContainerLike, SomeSatisfy, ContainerOperator } from "../../../containers.mjs";
import { Equality } from "../../../functions.mjs";
declare const contains: <C extends ContainerLike, T>({ someSatisfy }: SomeSatisfy<C>, value: T, options?: {
    readonly equality?: Equality<T> | undefined;
}) => ContainerOperator<C, T, boolean>;
export { contains as default };
