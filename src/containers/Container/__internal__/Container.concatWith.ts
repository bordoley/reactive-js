import {
  Concat,
  Container,
  ContainerOf,
  ContainerOperator,
} from "../../../containers.js";

const Container_concatWith =
  <C extends Container>(concat: Concat<C>["concat"]) =>
  <T>(
    snd: ContainerOf<C, T>,
    ...tail: readonly ContainerOf<C, T>[]
  ): ContainerOperator<C, T, T> =>
  first =>
    concat(first, snd, ...tail);

export default Container_concatWith;
