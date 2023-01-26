import {
  Concat,
  ContainerLike,
  ContainerOperator,
  FromArray,
} from "../../../containers";

import Container$concatWith from "./Container.concatWith";

const Container$endWith = <C extends ContainerLike, T>(
  m: Concat<C> & FromArray<C>,
  ...values: readonly T[]
): ContainerOperator<C, T, T> =>
  Container$concatWith(m, m.fromArray<T>()(values));

export default Container$endWith;
