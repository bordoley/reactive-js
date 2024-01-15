import { Mixin1 } from "../../__internal__/mixins.js";
import { DisposableLike, SerialDisposableLike } from "../../utils.js";
declare const SerialDisposableMixin: <TDisposable extends DisposableLike>() => Mixin1<SerialDisposableLike<TDisposable>, TDisposable, DisposableLike>;
export default SerialDisposableMixin;
