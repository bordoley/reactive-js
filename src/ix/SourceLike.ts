import { SourceLike, SourceLike_move } from "../ix";

export const move = <
  TSource extends {
    [SourceLike_move](): void;
  } = SourceLike,
>(
  source: TSource,
): TSource => {
  source[SourceLike_move]();
  return source;
};
