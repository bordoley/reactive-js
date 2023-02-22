import {
  Compute,
  ContainerLike,
  ContainerOf,
  FromReadonlyArray,
  Map,
} from "../../../containers.js";
import { Factory, callWith, pipe } from "../../../functions.js";

const Container_compute =
  <C extends ContainerLike, O = never>(
    fromReadonlyArray: FromReadonlyArray<C, O>["fromReadonlyArray"],
    map: Map<C>["map"],
  ): Compute<C, O>["compute"] =>
  <T>(factory: Factory<T>, options?: O): ContainerOf<C, T> => {
    const { start, count, ...tail } = (options ?? {}) as O & {
      readonly start?: number;
      readonly count?: number;
    };

    return pipe(
      [factory],
      fromReadonlyArray(
        tail as O & {
          readonly start?: number;
          readonly count?: number;
        },
      ),
      map(callWith()),
    );
  };

export default Container_compute;
