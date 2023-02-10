import { InteractiveContainerLike } from "../ix";
import { DisposableLike } from "../util";

import InteractiveContainer_interact from "./InteractiveContainer/__internal__/InteractiveContainer.interact";

export const interact: <
  C extends InteractiveContainerLike<TSource, TCtx>,
  TSource extends DisposableLike,
  TCtx = void,
>(
  ctx: TCtx,
) => (enumerable: C) => TSource = InteractiveContainer_interact;

/** @ignore */
const InteractiveContainer = {
  interact,
};

export default InteractiveContainer;
