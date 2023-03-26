import {
  ContainerLike,
  ContainerOf,
  FromFactory,
  FromOptional,
  Map,
} from "../../../containers.js";
import { Factory, pipe } from "../../../functions.js";

const Container_fromFactory =
  <C extends ContainerLike, O = never>(
    fromOptional: FromOptional<C, O>["fromOptional"],
    map: Map<C>["map"],
  ): FromFactory<C, O>["fromFactory"] =>
  <T>(factory: Factory<T>, options?: O): ContainerOf<C, T> =>
    pipe(
      factory,
      fromOptional(options),
      map(f => f()),
    );

export default Container_fromFactory;
