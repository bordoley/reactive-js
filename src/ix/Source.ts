import { SourceLike, SourceLike_move } from "../ix";

import Source$move from "./__internal__/Source/Source.move";

export const move: <
  TSource extends {
    [SourceLike_move](): void;
  } = SourceLike,
>(
  source: TSource,
) => TSource = Source$move;
