import { Mixin1 } from "../../../__internal__/mixins.mjs";
import { DisposableLike } from "../../../util.mjs";
import { MutableRefLike } from "../util.internal.mjs";
declare const DisposableRefLike__mixin: <TDisposable extends DisposableLike>() => Mixin1<MutableRefLike<TDisposable>, TDisposable>;
export { DisposableRefLike__mixin as default };
