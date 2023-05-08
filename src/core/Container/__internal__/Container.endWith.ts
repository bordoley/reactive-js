import { Container } from "../../../core.js";

const Container_endWith =
  <C extends Container>(
    concatWith: Container.TypeClass<C>["concatWith"],
    fromReadonlyArray: Container.TypeClass<C>["fromReadonlyArray"],
  ) =>
  <T>(...values: readonly T[]): Container.Operator<C, T, T> =>
    concatWith(fromReadonlyArray<T>()(values));

export default Container_endWith;
