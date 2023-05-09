import { Container, RunnableTypeClass } from "../../containers.js";
import { Function1, Predicate } from "../../functions.js";
declare const Container_noneSatisfy: <C extends Container.Type>(everySatisfy: <T>(predicate: Predicate<T>) => Function1<Container.Of<C, T>, boolean>) => <T_1>(predicate: Predicate<T_1>) => Function1<Container.Of<C, T_1>, boolean>;
export default Container_noneSatisfy;
