import { SerialDisposableLike } from "../../../__internal__/core.js";
import { Mixin1 } from "../../../__internal__/mixins.js";
import { DisposableLike } from "../../../core.js";
declare const SerialDisposable_mixin: <TDisposable extends DisposableLike>() => Mixin1<SerialDisposableLike<TDisposable>, TDisposable>;
export default SerialDisposable_mixin;
