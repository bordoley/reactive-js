import {
  ConcatWith,
  ContainerLike,
  ContainerOperator,
  FromReadonlyArray,
} from "../../../containers.js";

const Container_endWith =
  <C extends ContainerLike>(
    concatWith: ConcatWith<C>["concatWith"],
    fromReadonlyArray: FromReadonlyArray<C>["fromReadonlyArray"],
  ) =>
  <T>(...values: readonly T[]): ContainerOperator<C, T, T> =>
    concatWith(fromReadonlyArray<T>()(values));

export default Container_endWith;
