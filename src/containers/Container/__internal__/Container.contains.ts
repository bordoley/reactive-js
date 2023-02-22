import {
  ContainerLike,
  ContainerOperator,
  SomeSatisfy,
} from "../../../containers.js";

import { Equality, isEqualTo } from "../../../functions.js";

const Container_contains = <C extends ContainerLike, T>(
  { someSatisfy }: SomeSatisfy<C>,
  value: T,
  options: { readonly equality?: Equality<T> } = {},
): ContainerOperator<C, T, boolean> => someSatisfy(isEqualTo(value, options));

export default Container_contains;
