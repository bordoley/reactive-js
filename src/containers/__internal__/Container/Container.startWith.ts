import {
  Concat,
  ContainerLike,
  ContainerOperator,
  FromArray,
} from "../../../containers";
import { pipe } from "../../../functions";

import Container_concatWith from "./Container.concatWith";

const Container_startWith: <C extends ContainerLike, T>(
  m: Concat<C> & FromArray<C, never>,
  value: T,
  ...values: readonly T[]
) => ContainerOperator<C, T, T> =
  <C extends ContainerLike, T>(
    m: Concat<C> & FromArray<C>,
    ...values: readonly T[]
  ): ContainerOperator<C, T, T> =>
  container =>
    pipe(values, m.fromArray(), Container_concatWith(m, container));

export default Container_startWith;
