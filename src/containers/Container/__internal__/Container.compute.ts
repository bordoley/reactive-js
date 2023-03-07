import {
  Compute,
  ContainerLike,
  ContainerOf,
  FromOptional,
  Map,
} from "../../../containers.js";
import { Factory, callWith, pipe } from "../../../functions.js";

const Container_compute =
  <C extends ContainerLike, O = never>(
    fromOptional: FromOptional<C, O>["fromOptional"],
    map: Map<C>["map"],
  ): Compute<C, O>["compute"] =>
  <T>(factory: Factory<T>, options?: O): ContainerOf<C, T> => {
    return pipe(factory, fromOptional(options), map(callWith()));
  };

export default Container_compute;
