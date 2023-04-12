import { Mixin1 } from "../../../__internal__/mixins.js";
import { SerialDisposableLike } from "../../../__internal__/util.js";
import { DisposableLike } from "../../../util.js";
declare const SerialDisposable_mixin: <TDisposable extends DisposableLike>() => Mixin1<SerialDisposableLike<TDisposable>, TDisposable>;
export default SerialDisposable_mixin;
