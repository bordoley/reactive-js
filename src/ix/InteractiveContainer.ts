import { InteractiveContainerLike } from "../ix.js";
import { DisposableLike } from "../util.js";

import InteractiveContainer_interact from "./InteractiveContainer/__internal__/InteractiveContainer.interact.js";

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
