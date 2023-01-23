import {
  Concat,
  ContainerLike,
  ContainerOperator,
  FromArray,
} from "../../../containers";
import { pipe } from "../../../functions";

import ContainerLike__concatWith from "./ContainerLike.concatWith";

const ContainerLike__startWith =
  <C extends ContainerLike, T>(
    m: Concat<C> & FromArray<C>,
    ...values: readonly T[]
  ): ContainerOperator<C, T, T> =>
  container =>
    pipe(values, m.fromArray(), ContainerLike__concatWith(m, container));

export default ContainerLike__startWith;
