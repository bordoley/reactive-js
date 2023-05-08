import { Container } from "../../../core.js";
import { pipe } from "../../../functions.js";

const Container_startWith =
  <C extends Container>(
    concatWith: Container.TypeClass<C>["concatWith"],
    fromReadonlyArray: Container.TypeClass<C>["fromReadonlyArray"],
  ) =>
  <T>(...values: readonly T[]): Container.Operator<C, T, T> =>
  container =>
    pipe(values, fromReadonlyArray(), concatWith(container));

export default Container_startWith;
