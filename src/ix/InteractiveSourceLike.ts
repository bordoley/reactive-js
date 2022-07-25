import { InteractiveSourceLike, InteractiveSourceLike_move } from "../ix";

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
