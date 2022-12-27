import {
  ContainerLike,
  ContainerOf,
  FromArray,
  FromArrayOptions,
  Map,
} from "../../../containers";
import { Factory, Function1, callWith, compose } from "../../../functions";

const compute = <
  C extends ContainerLike,
  T,
  O extends FromArrayOptions = FromArrayOptions,
>(
  m: Map<C> & FromArray<C, O>,
  options?: Omit<Partial<O>, keyof FromArrayOptions>,
): Function1<Factory<T>, ContainerOf<C, T>> =>
  compose(
    x => [x],
    m.fromArray<Factory<T>>({
      ...options,
    }),
    m.map(callWith()),
  );

export default compute;
