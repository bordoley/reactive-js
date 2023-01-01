import { ContainerLike, EverySatisfy, ContainerOperator } from "../../../containers.mjs";
import { Predicate } from "../../../functions.mjs";
declare const ContainerLike__noneSatisfy: <C extends ContainerLike, T>({ everySatisfy }: EverySatisfy<C>, predicate: Predicate<T>) => ContainerOperator<C, T, boolean>;
export { ContainerLike__noneSatisfy as default };
