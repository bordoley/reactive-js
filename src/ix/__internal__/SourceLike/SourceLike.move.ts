import { SourceLike, SourceLike_move } from "../../../ix";

const SourceLike__move = <
  TSource extends {
    [SourceLike_move](): void;
  } = SourceLike,
>(
  source: TSource,
): TSource => {
  source[SourceLike_move]();
  return source;
};

export default SourceLike__move;
