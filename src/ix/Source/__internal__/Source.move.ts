import { SourceLike, SourceLike_move } from "../../../ix.js";

const Source_move = <
  TSource extends {
    [SourceLike_move](): void;
  } = SourceLike,
>(
  source: TSource,
): TSource => {
  source[SourceLike_move]();
  return source;
};

export default Source_move;
