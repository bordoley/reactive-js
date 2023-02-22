import { ContainerLike, ContainerOperator, EverySatisfy } from "../../../containers.js";
import { Predicate } from "../../../functions.js";
declare const Container_noneSatisfy: <C extends ContainerLike>(everySatisfy: <T>(predicate: Predicate<T>, options?: undefined) => ContainerOperator<C, T, boolean>) => <T_1>(predicate: Predicate<T_1>) => ContainerOperator<C, T_1, boolean>;
export default Container_noneSatisfy;
