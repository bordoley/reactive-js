import { ContainerLike, ContainerOf, Map } from "../../../containers.js";
import { Factory, Function1, Optional, pipe } from "../../../functions.js";

const Container_fromFactory =
  <C extends ContainerLike, O = never>(
    fromOptional: <T>(options?: O) => Function1<Optional<T>, ContainerOf<C, T>>,
    map: Map<C>["map"],
  ) =>
  <T>(factory: Factory<T>, options?: O): ContainerOf<C, T> =>
    pipe(
      factory,
      fromOptional(options),
      map(f => f()),
    );

export default Container_fromFactory;
