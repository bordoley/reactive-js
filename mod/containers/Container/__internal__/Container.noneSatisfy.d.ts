import { ContainerLike, ContainerOperator, EverySatisfy } from "../../../containers.js";
import { Predicate } from "../../../functions.js";
declare const Container_noneSatisfy: <C extends ContainerLike, T>({ everySatisfy }: EverySatisfy<C, never>, predicate: Predicate<T>) => ContainerOperator<C, T, boolean>;
export default Container_noneSatisfy;
