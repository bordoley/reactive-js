import { InteractiveContainerLike } from "../../../ix.mjs";
import { DisposableLike } from "../../../util.mjs";
declare const InteractiveContainerLike__interact: <C extends InteractiveContainerLike<TSource, TCtx>, TSource extends DisposableLike, TCtx = void>(ctx: TCtx) => (enumerable: C) => TSource;
export { InteractiveContainerLike__interact as default };
