import {
  ContainerLike,
  ContainerOf,
  FromArray,
  Map,
} from "../../../containers";
import { Factory, error, raise } from "../../../functions";

import Container_compute from "./Container.compute";

const Container_throws = <C extends ContainerLike, T, O = unknown>(
  m: Map<C> & FromArray<C, O>,
  options?: O & {
    raise?: Factory<unknown>;
  },
): ContainerOf<C, T> => {
  const { raise: factory = raise } = options ?? {};
  return Container_compute(m, () => raise<T>(error(factory())), options);
};

export default Container_throws;
