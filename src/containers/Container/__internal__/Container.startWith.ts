import {
  ConcatWith,
  Container,
  ContainerOperator,
  FromReadonlyArray,
} from "../../../containers.js";
import { pipe } from "../../../functions.js";

const Container_startWith =
  <C extends Container>(
    concatWith: ConcatWith<C>["concatWith"],
    fromReadonlyArray: FromReadonlyArray<C>["fromReadonlyArray"],
  ) =>
  <T>(...values: readonly T[]): ContainerOperator<C, T, T> =>
  container =>
    pipe(values, fromReadonlyArray(), concatWith(container));

export default Container_startWith;
