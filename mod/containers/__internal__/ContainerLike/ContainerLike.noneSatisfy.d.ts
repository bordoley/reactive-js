import { ContainerLike, EverySatisfy, ContainerOperator } from "../../../containers.mjs";
import { Predicate } from "../../../functions.mjs";
declare const noneSatisfy: <C extends ContainerLike, T>({ everySatisfy }: EverySatisfy<C>, predicate: Predicate<T>) => ContainerOperator<C, T, boolean>;
export { noneSatisfy as default };
