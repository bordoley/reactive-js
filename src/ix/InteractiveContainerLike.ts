import { InteractiveContainerLike } from "../ix";
import { DisposableLike } from "../util";

import InteractiveContainerLike__interact from "./__internal__/InteractiveContainerLike/InteractiveContainerLike.interact";

export const interact: <
  C extends InteractiveContainerLike<TSource, TCtx>,
  TSource extends DisposableLike,
  TCtx = void,
>(
  ctx: TCtx,
) => (enumerable: C) => TSource = InteractiveContainerLike__interact;
