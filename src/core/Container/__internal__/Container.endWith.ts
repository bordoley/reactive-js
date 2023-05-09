import { Container, Containers, DeferredContainers } from "../../../core.js";

const Container_endWith =
  <C extends Container>(
    concatWith: DeferredContainers.TypeClass<C>["concatWith"],
    fromReadonlyArray: DeferredContainers.TypeClass<C>["fromReadonlyArray"],
  ) =>
  <T>(...values: readonly T[]): Containers.Operator<C, T, T> =>
    concatWith(fromReadonlyArray<T>()(values));

export default Container_endWith;
