import {
  InteractiveContainerLike,
  InteractiveContainerLike_interact,
} from "../../../ix";
import { DisposableLike } from "../../../util";

const InteractiveContainer$interact =
  <
    C extends InteractiveContainerLike<TSource, TCtx>,
    TSource extends DisposableLike,
    TCtx = void,
  >(
    ctx: TCtx,
  ) =>
  (enumerable: C): TSource =>
    enumerable[InteractiveContainerLike_interact](ctx);

export default InteractiveContainer$interact;
