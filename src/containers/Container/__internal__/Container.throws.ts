import {
  ContainerLike,
  ContainerOf,
  FromReadonlyArray,
  Map,
} from "../../../containers.js";
import { Factory, error, raise } from "../../../functions.js";

import Container_compute from "./Container.compute.js";

const Container_throws = <C extends ContainerLike, T, O = unknown>(
  m: Map<C> & FromReadonlyArray<C, O>,
  options?: O & {
    raise?: Factory<unknown>;
  },
): ContainerOf<C, T> => {
  const { raise: factory = raise } = options ?? {};
  return Container_compute(m, () => raise<T>(error(factory())), options);
};

export default Container_throws;
