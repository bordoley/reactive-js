import { Function1, Predicate } from "../../functions.js";
import { Container, Containers, RunnableContainers } from "../../types.js";
declare const Container_noneSatisfy: <C extends Container>(everySatisfy: <T>(predicate: Predicate<T>) => Function1<Containers.Of<C, T>, boolean>) => <T_1>(predicate: Predicate<T_1>) => Function1<Containers.Of<C, T_1>, boolean>;
export default Container_noneSatisfy;
