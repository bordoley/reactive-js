import { Container } from "../../../core.js";
import { Equality, Function1, isEqualTo } from "../../../functions.js";

const Container_contains =
  <C extends Container>(someSatisfy: Container.TypeClass<C>["someSatisfy"]) =>
  <T>(
    value: T,
    options: { readonly equality?: Equality<T> } = {},
  ): Function1<Container.Of<C, T>, boolean> =>
    someSatisfy(isEqualTo(value, options));

export default Container_contains;
