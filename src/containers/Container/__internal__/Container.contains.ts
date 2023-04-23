import {
  ContainerLike,
  ContainerOf,
  SomeSatisfy,
} from "../../../containers.js";
import { Equality, Function1, isEqualTo } from "../../../functions.js";

const Container_contains =
  <C extends ContainerLike>(someSatisfy: SomeSatisfy<C>["someSatisfy"]) =>
  <T>(
    value: T,
    options: { readonly equality?: Equality<T> } = {},
  ): Function1<ContainerOf<C, T>, boolean> =>
    someSatisfy(isEqualTo(value, options));

export default Container_contains;
