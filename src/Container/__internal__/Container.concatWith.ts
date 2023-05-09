import { Container, Containers, DeferredContainers } from "../../types.js";

const Container_concatWith =
  <C extends Container>(concat: DeferredContainers.TypeClass<C>["concat"]) =>
  <T>(
    snd: Containers.Of<C, T>,
    ...tail: readonly Containers.Of<C, T>[]
  ): Containers.Operator<C, T, T> =>
  first =>
    concat(first, snd, ...tail);

export default Container_concatWith;
