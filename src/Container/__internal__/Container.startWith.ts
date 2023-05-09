import { Container, Containers, DeferredTypeClass } from "../../containers.js";
import { pipe } from "../../functions.js";

const Container_startWith =
  <C extends Container>(
    concatWith: DeferredTypeClass<C>["concatWith"],
    fromReadonlyArray: DeferredTypeClass<C>["fromReadonlyArray"],
  ) =>
  <T>(...values: readonly T[]): Containers.Operator<C, T, T> =>
  container =>
    pipe(values, fromReadonlyArray(), concatWith(container));

export default Container_startWith;
