import { InteractiveContainerLike } from "../ix.js";
import { DisposableLike } from "../util.js";
declare const interact: <C extends InteractiveContainerLike<TSource, TCtx>, TSource extends DisposableLike, TCtx = void>(ctx: TCtx) => (enumerable: C) => TSource;
export { interact };
