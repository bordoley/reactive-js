import { __DEV__ } from "./__internal__.env";
import { DisposableLike } from "./disposable";

export interface InteractiveSourceLike extends DisposableLike {
  move(this: this): void;
}

export const move = <
  TSource extends InteractiveSourceLike = InteractiveSourceLike,
>(
  source: TSource,
): TSource => {
  source.move();
  return source;
};
