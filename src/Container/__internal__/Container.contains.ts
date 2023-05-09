import { Container, Containers, RunnableContainers } from "../../containers.js";
import { Equality, Function1, isEqualTo } from "../../functions.js";

const Container_contains =
  <C extends Container>(
    someSatisfy: RunnableContainers.TypeClass<C>["someSatisfy"],
  ) =>
  <T>(
    value: T,
    options: { readonly equality?: Equality<T> } = {},
  ): Function1<Containers.Of<C, T>, boolean> =>
    someSatisfy(isEqualTo(value, options));

export default Container_contains;
