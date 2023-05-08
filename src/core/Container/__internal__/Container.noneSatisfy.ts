import { Container, Containers, RunnableContainers } from "../../../core.js";
import { Function1, Predicate, compose, negate } from "../../../functions.js";

const Container_noneSatisfy =
  <C extends Container>(
    everySatisfy: RunnableContainers.TypeClass<C>["everySatisfy"],
  ) =>
  <T>(predicate: Predicate<T>): Function1<Containers.Of<C, T>, boolean> =>
    everySatisfy(compose(predicate, negate));

export default Container_noneSatisfy;
