import { Mixin1 } from "../../__internal__/mixins.js";
import { DisposableLike, SerialDisposableLike, SerialDisposableLike_current } from "../../utils.js";
type TPrototype<TDisposable extends DisposableLike> = Pick<SerialDisposableLike<TDisposable>, typeof SerialDisposableLike_current>;
type TReturn<TDisposable extends DisposableLike> = TPrototype<TDisposable>;
declare const SerialDisposableMixin: <TDisposable extends DisposableLike>() => Mixin1<TReturn<TDisposable>, TDisposable, TPrototype<TDisposable>, DisposableLike>;
export default SerialDisposableMixin;
