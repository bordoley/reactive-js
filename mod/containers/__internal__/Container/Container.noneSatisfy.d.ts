import { ContainerLike, EverySatisfy, ContainerOperator } from "../../../containers.js";
import { Predicate } from "../../../functions.js";
declare const Container_noneSatisfy: <C extends ContainerLike, T>({ everySatisfy }: EverySatisfy<C>, predicate: Predicate<T>) => ContainerOperator<C, T, boolean>;
export { Container_noneSatisfy as default };
