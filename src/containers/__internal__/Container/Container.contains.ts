import {
  ContainerLike,
  ContainerOperator,
  SomeSatisfy,
} from "../../../containers";

import { Equality, isEqualTo } from "../../../functions";

const Container_contains = <C extends ContainerLike, T>(
  { someSatisfy }: SomeSatisfy<C>,
  value: T,
  options: { readonly equality?: Equality<T> } = {},
): ContainerOperator<C, T, boolean> => someSatisfy(isEqualTo(value, options));

export default Container_contains;
