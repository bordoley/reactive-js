import { Mixin1 } from "../../../../__internal__/mixins.js";
import { DisposableLike } from "../../../../util.js";
import { MutableRefLike } from "../../util.internal.js";
declare const DisposableRef_mixin: <TDisposable extends DisposableLike>() => Mixin1<MutableRefLike<TDisposable>, TDisposable>;
export { DisposableRef_mixin as default };
