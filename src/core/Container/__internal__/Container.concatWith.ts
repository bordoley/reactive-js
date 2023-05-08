import { Container } from "../../../core.js";

const Container_concatWith =
  <C extends Container>(concat: Container.Concat<C>["concat"]) =>
  <T>(
    snd: Container.Of<C, T>,
    ...tail: readonly Container.Of<C, T>[]
  ): Container.Operator<C, T, T> =>
  first =>
    concat(first, snd, ...tail);

export default Container_concatWith;
