import { __DEV__ } from "./__internal__.env";
import { ContainerLike } from "./container";
import { Disposable } from "./disposable";

export interface InteractiveSourceLike<T> extends Disposable, ContainerLike {
  readonly T: T;
  readonly TContainerOf: InteractiveSourceLike<this["T"]>;

  move(): void;
}

export const move = <
  T,
  TSource extends InteractiveSourceLike<T> = InteractiveSourceLike<T>,
>(
  source: TSource,
): InteractiveSourceLike<T> => {
  source.move();
  return source;
};
