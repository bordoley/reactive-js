import { Container, ContainerOf } from "../../../containers.js";
import { Function1, Predicate, compose, negate } from "../../../functions.js";

const Container_noneSatisfy =
  <C extends Container>(
    everySatisfy: Container.EverySatisfy<C>["everySatisfy"],
  ) =>
  <T>(predicate: Predicate<T>): Function1<ContainerOf<C, T>, boolean> =>
    everySatisfy(compose(predicate, negate));

export default Container_noneSatisfy;
