import {
  ContainerLike,
  ContainerOf,
  FromArray,
  Map,
} from "../../../containers";
import { Factory, Function1, pipe, raise } from "../../../functions";

import ContainerLike__compute from "./ContainerLike.compute";

const ContainerLike__throws =
  <
    C extends ContainerLike,
    T,
    O extends {
      readonly start: number;
      readonly count: number;
    } = {
      readonly start: number;
      readonly count: number;
    },
  >(
    m: Map<C> & FromArray<C, O>,
    options?: Omit<Partial<O>, "start" | "count">,
  ): Function1<Factory<unknown>, ContainerOf<C, T>> =>
  (errorFactory): ContainerOf<C, T> =>
    pipe(() => {
      const err = errorFactory();
      return raise<T>(err);
    }, ContainerLike__compute(m, options));

export default ContainerLike__throws;
