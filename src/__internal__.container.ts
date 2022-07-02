import { ContainerLike, ContainerOf, FromArrayOptions } from "./container";
import { Function1, length, max, min } from "./functions";

export const createFromArray =
  <C extends ContainerLike, O extends FromArrayOptions = FromArrayOptions>(
    factory: <T>(
      values: readonly T[],
      startIndex: number,
      endIndex: number,
      options?: Partial<O>,
    ) => ContainerOf<C, T>,
  ) =>
  <T>(options: Partial<O> = {}): Function1<readonly T[], ContainerOf<C, T>> =>
  values => {
    const valuesLength = length(values);
    const startIndex = min(options.startIndex ?? 0, valuesLength);
    const endIndex = max(
      min(options.endIndex ?? valuesLength, valuesLength),
      0,
    );

    return factory(values, startIndex, endIndex, options);
  };
