import { DisposableLike } from "../util/DisposableLike";

export const InteractiveSourceLike_move = Symbol("InteractiveSourceLike_move");
export interface InteractiveSourceLike extends DisposableLike {
  [InteractiveSourceLike_move](): void;
}

export const move = <
  TSource extends {
    [InteractiveSourceLike_move](): void;
  } = InteractiveSourceLike,
>(
  source: TSource,
): TSource => {
  source[InteractiveSourceLike_move]();
  return source;
};
