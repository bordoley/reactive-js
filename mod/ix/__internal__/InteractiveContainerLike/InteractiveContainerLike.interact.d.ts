import { InteractiveContainerLike } from "../../../ix.mjs";
import { DisposableLike } from "../../../util.mjs";
declare const interact: <C extends InteractiveContainerLike<TSource, TCtx>, TSource extends DisposableLike, TCtx = void>(ctx: TCtx) => (enumerable: C) => TSource;
export { interact as default };
