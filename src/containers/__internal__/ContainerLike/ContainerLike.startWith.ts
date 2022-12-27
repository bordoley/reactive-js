import {
  Concat,
  ContainerLike,
  ContainerOperator,
  FromArray,
  FromArrayOptions,
} from "../../../containers";
import { pipe } from "../../../functions";

import ContainerLike__concatWith from "./ContainerLike.concatWith";

const startWith =
  <C extends ContainerLike, T, O extends FromArrayOptions = FromArrayOptions>(
    m: Concat<C> & FromArray<C, O>,
    ...values: readonly T[]
  ): ContainerOperator<C, T, T> =>
  container =>
    pipe(values, m.fromArray(), ContainerLike__concatWith(m, container));

export default startWith;
