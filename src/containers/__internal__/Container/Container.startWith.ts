import {
  Concat,
  ContainerLike,
  ContainerOperator,
  FromArray,
} from "../../../containers";
import { pipe } from "../../../functions";

import Container$concatWith from "./Container.concatWith";

const Container$startWith =
  <C extends ContainerLike, T>(
    m: Concat<C> & FromArray<C>,
    ...values: readonly T[]
  ): ContainerOperator<C, T, T> =>
  container =>
    pipe(values, m.fromArray(), Container$concatWith(m, container));

export default Container$startWith;
