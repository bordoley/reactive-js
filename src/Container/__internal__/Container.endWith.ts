import { DeferredTypeClass } from "../../type-classes.js";
import { Container, ContainerOperator } from "../../types.js";

const Container_endWith =
  <C extends Container>(
    concatWith: DeferredTypeClass<C>["concatWith"],
    fromReadonlyArray: DeferredTypeClass<C>["fromReadonlyArray"],
  ) =>
  <T>(...values: readonly T[]): ContainerOperator<C, T, T> =>
    concatWith(fromReadonlyArray<T>()(values));

export default Container_endWith;
