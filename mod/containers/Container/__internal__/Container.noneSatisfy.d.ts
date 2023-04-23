import { ContainerLike, ContainerOf, EverySatisfy } from "../../../containers.js";
import { Function1, Predicate } from "../../../functions.js";
declare const Container_noneSatisfy: <C extends ContainerLike>(everySatisfy: <T>(predicate: Predicate<T>, options?: undefined) => Function1<ContainerOf<C, T>, boolean>) => <T_1>(predicate: Predicate<T_1>) => Function1<ContainerOf<C, T_1>, boolean>;
export default Container_noneSatisfy;
