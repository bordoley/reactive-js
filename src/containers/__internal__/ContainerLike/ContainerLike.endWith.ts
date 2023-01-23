import {
  Concat,
  ContainerLike,
  ContainerOperator,
  FromArray,
} from "../../../containers";

import Container__concatWith from "./ContainerLike.concatWith";

const ContainerLike__endWith = <C extends ContainerLike, T>(
  m: Concat<C> & FromArray<C>,
  ...values: readonly T[]
): ContainerOperator<C, T, T> =>
  Container__concatWith(m, m.fromArray<T>()(values));

export default ContainerLike__endWith;
