import { Factory, Function1, Optional, pipe } from "../../functions.js";
import { ContainerTypeClass } from "../../type-classes.js";
import { Container, ContainerOf } from "../../types.js";

const Container_fromFactory =
  <C extends Container, O = never>(
    fromOptional: <T>(options?: O) => Function1<Optional<T>, ContainerOf<C, T>>,
    map: ContainerTypeClass<C>["map"],
  ) =>
  <T>(factory: Factory<T>, options?: O): ContainerOf<C, T> =>
    pipe(
      factory,
      fromOptional(options),
      map(f => f()),
    );

export default Container_fromFactory;
