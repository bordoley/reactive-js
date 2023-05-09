import { Container, DeferredTypeClass } from "../../containers.js";

const Container_endWith =
  <C extends Container.Type>(
    concatWith: DeferredTypeClass<C>["concatWith"],
    fromReadonlyArray: DeferredTypeClass<C>["fromReadonlyArray"],
  ) =>
  <T>(...values: readonly T[]): Container.Operator<C, T, T> =>
    concatWith(fromReadonlyArray<T>()(values));

export default Container_endWith;
