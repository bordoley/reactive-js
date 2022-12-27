import { SourceLike, SourceLike_move } from "../ix";

import SourceLike__move from "./__internal__/SourceLike/SourceLike.move";

export const move: <
  TSource extends {
    [SourceLike_move](): void;
  } = SourceLike,
>(
  source: TSource,
) => TSource = SourceLike__move;
