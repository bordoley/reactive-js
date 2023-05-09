import { Container, ContainerTypeClass, Containers } from "../../containers.js";
import { Factory, Function1, Optional, pipe } from "../../functions.js";

const Container_fromFactory =
  <C extends Container, O = never>(
    fromOptional: <T>(
      options?: O,
    ) => Function1<Optional<T>, Containers.Of<C, T>>,
    map: ContainerTypeClass<C>["map"],
  ) =>
  <T>(factory: Factory<T>, options?: O): Containers.Of<C, T> =>
    pipe(
      factory,
      fromOptional(options),
      map(f => f()),
    );

export default Container_fromFactory;
