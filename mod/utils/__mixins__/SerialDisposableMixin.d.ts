import { Mixin1 } from "../../__internal__/mixins.js";
import { DisposableLike, SerialDisposableLike, SerialDisposableLike_current } from "../../utils.js";
declare const SerialDisposableMixin: <TDisposable extends DisposableLike>() => Mixin1<Pick<SerialDisposableLike<TDisposable>, typeof SerialDisposableLike_current>, TDisposable, DisposableLike, Pick<SerialDisposableLike<TDisposable>, typeof SerialDisposableLike_current>>;
export default SerialDisposableMixin;
