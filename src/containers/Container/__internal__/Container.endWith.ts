import {
  Concat,
  ContainerLike,
  ContainerOperator,
  FromReadonlyArray,
} from "../../../containers";

import Container_concatWith from "./Container.concatWith";

const Container_endWith: <C extends ContainerLike, T>(
  m: Concat<C> & FromReadonlyArray<C>,
  value: T,
  ...values: readonly T[]
) => ContainerOperator<C, T, T> = <C extends ContainerLike, T>(
  m: Concat<C> & FromReadonlyArray<C>,
  ...values: readonly T[]
): ContainerOperator<C, T, T> =>
  Container_concatWith(m, m.fromReadonlyArray<T>()(values));

export default Container_endWith;
