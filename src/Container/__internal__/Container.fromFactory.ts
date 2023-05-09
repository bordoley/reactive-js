import { Container, ContainerTypeClass } from "../../containers.js";
import { Factory, Function1, Optional, pipe } from "../../functions.js";

const Container_fromFactory =
  <C extends Container.Type, O = never>(
    fromOptional: <T>(
      options?: O,
    ) => Function1<Optional<T>, Container.Of<C, T>>,
    map: ContainerTypeClass<C>["map"],
  ) =>
  <T>(factory: Factory<T>, options?: O): Container.Of<C, T> =>
    pipe(
      factory,
      fromOptional(options),
      map(f => f()),
    );

export default Container_fromFactory;
