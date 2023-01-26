import { SourceLike, SourceLike_move } from "../ix";

import Source_move from "./__internal__/Source/Source.move";

export const move: <
  TSource extends {
    [SourceLike_move](): void;
  } = SourceLike,
>(
  source: TSource,
) => TSource = Source_move;
