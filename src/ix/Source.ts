import { SourceLike, SourceLike_move } from "../ix";

import Source_move from "./__internal__/Source/Source.move";

export const move: <
  TSource extends {
    [SourceLike_move](): void;
  } = SourceLike,
>(
  source: TSource,
) => TSource = Source_move;

/** @ignore */
const Source = {
  move,
};

export default Source;
