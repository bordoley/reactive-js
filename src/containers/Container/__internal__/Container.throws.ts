import {
  ContainerLike,
  ContainerOf,
  FromArray,
  Map,
} from "../../../containers";
import { Factory, Function1, error, pipe, raise } from "../../../functions";

import Container_compute from "./Container.compute";

const Container_throws =
  <
    C extends ContainerLike,
    T,
    O extends {
      readonly start?: number;
      readonly count?: number;
    } = {
      readonly start?: number;
      readonly count?: number;
    },
  >(
    m: Map<C> & FromArray<C, O>,
    options?: Omit<O, "start" | "count">,
  ): Function1<Factory<unknown>, ContainerOf<C, T>> =>
  (errorFactory): ContainerOf<C, T> =>
    pipe(() => {
      const err = errorFactory();
      return raise<T>(error(err));
    }, Container_compute(m, options));

export default Container_throws;
