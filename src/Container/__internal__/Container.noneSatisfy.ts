import { Function1, Predicate, compose, negate } from "../../functions.js";
import { RunnableTypeClass } from "../../type-classes.js";
import { Container, ContainerOf } from "../../types.js";

const Container_noneSatisfy =
  <C extends Container>(everySatisfy: RunnableTypeClass<C>["everySatisfy"]) =>
  <T>(predicate: Predicate<T>): Function1<ContainerOf<C, T>, boolean> =>
    everySatisfy(compose(predicate, negate));

export default Container_noneSatisfy;
