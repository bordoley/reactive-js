import { pipe } from "../../functions.js";
import { DeferredTypeClass } from "../../type-classes.js";
import { Container, ContainerOperator } from "../../types.js";

const Container_startWith =
  <C extends Container>(
    concatWith: DeferredTypeClass<C>["concatWith"],
    fromReadonlyArray: DeferredTypeClass<C>["fromReadonlyArray"],
  ) =>
  <T>(...values: readonly T[]): ContainerOperator<C, T, T> =>
  container =>
    pipe(values, fromReadonlyArray(), concatWith(container));

export default Container_startWith;
