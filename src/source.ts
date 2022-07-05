import { __DEV__ } from "./__internal__.env";
import { ContainerLike } from "./container";
import { Disposable } from "./disposable";

export interface SourceLike<T> extends Disposable, ContainerLike {
  readonly T: T;
  readonly TContainerOf: SourceLike<this["T"]>;

  move(): void;
}

export const move = <T, TSource extends SourceLike<T> = SourceLike<T>>(
  source: TSource,
): SourceLike<T> => {
  source.move();
  return source;
};
