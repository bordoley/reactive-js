import { __DEV__ } from "./__internal__.env";
import { Disposable } from "./disposable";

export interface InteractiveSourceLike extends Disposable {
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
