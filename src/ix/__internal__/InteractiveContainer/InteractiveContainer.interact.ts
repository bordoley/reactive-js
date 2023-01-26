import {
  InteractiveContainerLike,
  InteractiveContainerLike_interact,
} from "../../../ix";
import { DisposableLike } from "../../../util";

const InteractiveContainer_interact =
  <
    C extends InteractiveContainerLike<TSource, TCtx>,
    TSource extends DisposableLike,
    TCtx = void,
  >(
    ctx: TCtx,
  ) =>
  (enumerable: C): TSource =>
    enumerable[InteractiveContainerLike_interact](ctx);

export default InteractiveContainer_interact;
