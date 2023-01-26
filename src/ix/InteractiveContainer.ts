import { InteractiveContainerLike } from "../ix";
import { DisposableLike } from "../util";

import InteractiveContainer_interact from "./__internal__/InteractiveContainer/InteractiveContainer.interact";

export const interact: <
  C extends InteractiveContainerLike<TSource, TCtx>,
  TSource extends DisposableLike,
  TCtx = void,
>(
  ctx: TCtx,
) => (enumerable: C) => TSource = InteractiveContainer_interact;
