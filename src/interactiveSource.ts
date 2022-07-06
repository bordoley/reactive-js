import { __DEV__ } from "./__internal__.env";
import { Disposable } from "./disposable";
import { TInteractive } from "./liftable";

export interface InteractiveSourceLike extends Disposable {
  readonly TLiftableContainerStateType: TInteractive;
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
