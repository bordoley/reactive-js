import { DeferredTypeClass } from "../../type-classes.js";
import { Container, ContainerOf, ContainerOperator } from "../../types.js";

const Container_concatWith =
  <C extends Container>(concat: DeferredTypeClass<C>["concat"]) =>
  <T>(
    snd: ContainerOf<C, T>,
    ...tail: readonly ContainerOf<C, T>[]
  ): ContainerOperator<C, T, T> =>
  first =>
    concat(first, snd, ...tail);

export default Container_concatWith;
