import { ContainerLike, EverySatisfy, ContainerOperator } from "../../../containers.js";
import { Predicate } from "../../../functions.js";
declare const ContainerLike__noneSatisfy: <C extends ContainerLike, T>({ everySatisfy }: EverySatisfy<C>, predicate: Predicate<T>) => ContainerOperator<C, T, boolean>;
export { ContainerLike__noneSatisfy as default };
