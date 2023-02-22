import { SourceLike, SourceLike_move } from "../ix.js";

import Source_move from "./Source/__internal__/Source.move.js";

export const move: <
  TSource extends {
    [SourceLike_move](): void;
  } = SourceLike,
>(
  source: TSource,
) => TSource = Source_move;
