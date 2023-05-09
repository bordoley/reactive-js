import { Container, Containers, DeferredTypeClass } from "../../containers.js";

const Container_endWith =
  <C extends Container>(
    concatWith: DeferredTypeClass<C>["concatWith"],
    fromReadonlyArray: DeferredTypeClass<C>["fromReadonlyArray"],
  ) =>
  <T>(...values: readonly T[]): Containers.Operator<C, T, T> =>
    concatWith(fromReadonlyArray<T>()(values));

export default Container_endWith;
