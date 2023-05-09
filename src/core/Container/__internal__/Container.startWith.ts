import { Container, Containers, DeferredContainers } from "../../../core.js";
import { pipe } from "../../../functions.js";

const Container_startWith =
  <C extends Container>(
    concatWith: DeferredContainers.TypeClass<C>["concatWith"],
    fromReadonlyArray: DeferredContainers.TypeClass<C>["fromReadonlyArray"],
  ) =>
  <T>(...values: readonly T[]): Containers.Operator<C, T, T> =>
  container =>
    pipe(values, fromReadonlyArray(), concatWith(container));

export default Container_startWith;
