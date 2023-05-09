import { Container, DeferredTypeClass } from "../../containers.js";
import { pipe } from "../../functions.js";

const Container_startWith =
  <C extends Container.Type>(
    concatWith: DeferredTypeClass<C>["concatWith"],
    fromReadonlyArray: DeferredTypeClass<C>["fromReadonlyArray"],
  ) =>
  <T>(...values: readonly T[]): Container.Operator<C, T, T> =>
  container =>
    pipe(values, fromReadonlyArray(), concatWith(container));

export default Container_startWith;
