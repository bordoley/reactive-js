import {
  ContainerLike,
  ContainerOf,
  FromReadonlyArray,
  Map,
} from "../../../containers.js";
import { Factory, callWith, pipe } from "../../../functions.js";

const Container_compute = <C extends ContainerLike, T, O = unknown>(
  m: Map<C> & FromReadonlyArray<C, O>,
  factory: Factory<T>,
  options?: O,
): ContainerOf<C, T> => {
  const { start, count, ...tail } = (options ?? {}) as O & {
    readonly start?: number;
    readonly count?: number;
  };

  return pipe(
    [factory],
    m.fromReadonlyArray(
      tail as O & {
        readonly start?: number;
        readonly count?: number;
      },
    ),
    m.map(callWith()),
  );
};

export default Container_compute;
