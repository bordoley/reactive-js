import { InteractiveContainerLike } from "../../../ix.js";
import { DisposableLike } from "../../../util.js";
declare const InteractiveContainer_interact: <C extends InteractiveContainerLike<TSource, TCtx>, TSource extends DisposableLike, TCtx = void>(ctx: TCtx) => (enumerable: C) => TSource;
export default InteractiveContainer_interact;
