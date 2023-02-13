import {
  Concat,
  ContainerLike,
  ContainerOperator,
  FromReadonlyArray,
} from "../../../containers";
import { pipe } from "../../../functions";

import Container_concatWith from "./Container.concatWith";

const Container_startWith: <C extends ContainerLike, T>(
  m: Concat<C> & FromReadonlyArray<C>,
  value: T,
  ...values: readonly T[]
) => ContainerOperator<C, T, T> =
  <C extends ContainerLike, T>(
    m: Concat<C> & FromReadonlyArray<C>,
    ...values: readonly T[]
  ): ContainerOperator<C, T, T> =>
  container =>
    pipe(values, m.fromReadonlyArray(), Container_concatWith(m, container));

export default Container_startWith;
