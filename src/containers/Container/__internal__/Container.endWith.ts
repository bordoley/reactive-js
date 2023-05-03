import { Container, ContainerOperator } from "../../../containers.js";

const Container_endWith =
  <C extends Container>(
    concatWith: Container.ConcatWith<C>["concatWith"],
    fromReadonlyArray: Container.FromReadonlyArray<C>["fromReadonlyArray"],
  ) =>
  <T>(...values: readonly T[]): ContainerOperator<C, T, T> =>
    concatWith(fromReadonlyArray<T>()(values));

export default Container_endWith;
