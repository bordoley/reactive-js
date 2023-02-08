import {
  Concat,
  ContainerLike,
  ContainerOperator,
  FromArray,
} from "../../../containers";

import Container_concatWith from "./Container.concatWith";

const Container_endWith: <C extends ContainerLike, T>(
  m: Concat<C> & FromArray<C, never>,
  value: T,
  ...values: readonly T[]
) => ContainerOperator<C, T, T> = <C extends ContainerLike, T>(
  m: Concat<C> & FromArray<C>,
  ...values: readonly T[]
): ContainerOperator<C, T, T> =>
  Container_concatWith(m, m.fromArray<T>()(values));

export default Container_endWith;
