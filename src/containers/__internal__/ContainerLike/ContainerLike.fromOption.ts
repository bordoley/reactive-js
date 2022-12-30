import {
  ContainerLike,
  ContainerOf,
  FromArray,
  FromArrayOptions,
} from "../../../containers";
import { Function1, Optional, isSome, pipe } from "../../../functions";

const fromOption =
  <C extends ContainerLike, T, O extends FromArrayOptions = FromArrayOptions>(
    { fromArray }: FromArray<C, O>,
    options?: Omit<Partial<O>, keyof FromArrayOptions>,
  ): Function1<Optional<T>, ContainerOf<C, T>> =>
  option =>
    pipe(isSome(option) ? [option] : [], fromArray<T>({ ...options }));

export default fromOption;
