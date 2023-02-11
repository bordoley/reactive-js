import {
  ContainerLike,
  ContainerOf,
  FromArray,
  Map,
} from "../../../containers";
import { Factory, callWith, pipe } from "../../../functions";

const Container_compute = <C extends ContainerLike, T, O = unknown>(
  m: Map<C> & FromArray<C, O>,
  factory: Factory<T>,
  options?: O,
): ContainerOf<C, T> => {
  const { start, count, ...tail } = (options ?? {}) as O & {
    readonly start?: number;
    readonly count?: number;
  };

  return pipe(
    [factory],
    m.fromArray(
      tail as O & {
        readonly start?: number;
        readonly count?: number;
      },
    ),
    m.map(callWith()),
  );
};

export default Container_compute;
