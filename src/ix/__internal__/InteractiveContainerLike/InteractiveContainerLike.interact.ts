import {
  InteractiveContainerLike,
  InteractiveContainerLike_interact,
} from "../../../ix";
import { DisposableLike } from "../../../util";

const interact =
  <
    C extends InteractiveContainerLike<TSource, TCtx>,
    TSource extends DisposableLike,
    TCtx = void,
  >(
    ctx: TCtx,
  ) =>
  (enumerable: C): TSource =>
    enumerable[InteractiveContainerLike_interact](ctx);

export default interact;
