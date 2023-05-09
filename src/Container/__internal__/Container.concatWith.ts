import { Container, Containers, DeferredTypeClass } from "../../containers.js";

const Container_concatWith =
  <C extends Container>(concat: DeferredTypeClass<C>["concat"]) =>
  <T>(
    snd: Containers.Of<C, T>,
    ...tail: readonly Containers.Of<C, T>[]
  ): Containers.Operator<C, T, T> =>
  first =>
    concat(first, snd, ...tail);

export default Container_concatWith;
