import {
  Concat,
  ContainerLike,
  ContainerOperator,
  FromArray,
  FromArrayOptions,
} from "../../../containers";

import Container__concatWith from "./ContainerLike.concatWith";

const ContainerLike__endWith = <
  C extends ContainerLike,
  T,
  O extends FromArrayOptions = FromArrayOptions,
>(
  m: Concat<C> & FromArray<C, O>,
  ...values: readonly T[]
): ContainerOperator<C, T, T> =>
  Container__concatWith(m, m.fromArray<T>()(values));

export default ContainerLike__endWith;
