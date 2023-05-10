import { Equality, Function1, isEqualTo } from "../../functions.js";
import { RunnableTypeClass } from "../../type-classes.js";
import { Container, ContainerOf } from "../../types.js";

const Container_contains =
  <C extends Container>(someSatisfy: RunnableTypeClass<C>["someSatisfy"]) =>
  <T>(
    value: T,
    options: { readonly equality?: Equality<T> } = {},
  ): Function1<ContainerOf<C, T>, boolean> =>
    someSatisfy(isEqualTo(value, options));

export default Container_contains;
