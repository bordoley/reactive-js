import {
  ContainerLike,
  ContainerOf,
  FromArray,
  Map,
} from "../../../containers";
import { Factory, Function1, callWith, compose } from "../../../functions";

const Container_compute = <
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
  // FIXME: How do we omit the start/count options sanely
  options?: Partial<O>,
): Function1<Factory<T>, ContainerOf<C, T>> =>
  compose(x => [x], m.fromArray<Factory<T>>(options), m.map(callWith()));

export default Container_compute;
