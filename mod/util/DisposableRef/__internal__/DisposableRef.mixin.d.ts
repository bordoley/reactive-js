import { Mixin1 } from "../../../__internal__/mixins.js";
import { DisposableLike } from "../../../util.js";
import { MutableRefLike } from "../../__internal__/util.internal.js";
declare const DisposableRef_mixin: <TDisposable extends DisposableLike>() => Mixin1<MutableRefLike<TDisposable>, TDisposable>;
export default DisposableRef_mixin;
