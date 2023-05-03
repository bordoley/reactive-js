import { Container, ContainerOperator } from "../../../containers.js";
import { pipe } from "../../../functions.js";

const Container_startWith =
  <C extends Container>(
    concatWith: Container.ConcatWith<C>["concatWith"],
    fromReadonlyArray: Container.FromReadonlyArray<C>["fromReadonlyArray"],
  ) =>
  <T>(...values: readonly T[]): ContainerOperator<C, T, T> =>
  container =>
    pipe(values, fromReadonlyArray(), concatWith(container));

export default Container_startWith;
