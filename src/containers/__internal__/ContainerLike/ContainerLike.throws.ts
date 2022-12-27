import {
  ContainerLike,
  ContainerOf,
  FromArray,
  FromArrayOptions,
  Map,
} from "../../../containers";
import { Factory, Function1, pipe } from "../../../functions";

import ContainerLike__compute from "./ContainerLike.compute";

const throws =
  <C extends ContainerLike, T, O extends FromArrayOptions = FromArrayOptions>(
    m: Map<C> & FromArray<C, O>,
    options?: Omit<Partial<O>, keyof FromArrayOptions>,
  ): Function1<Factory<unknown>, ContainerOf<C, T>> =>
  (errorFactory): ContainerOf<C, T> =>
    pipe(() => {
      const cause = errorFactory();
      throw cause;
    }, ContainerLike__compute(m, options));

export default throws;
