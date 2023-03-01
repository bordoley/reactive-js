import { Mixin2 } from "../../../__internal__/mixins.js";
import { ObservableLike, ObserverLike, SinkLike_notify } from "../../../rx.js";
declare const Sink_decodeWithCharsetMixin: <C extends ObservableLike>(fromReadonlyArray: (v: readonly string[]) => C) => Mixin2<ObserverLike<ArrayBuffer>, ObserverLike<string>, string, Pick<ObserverLike<ArrayBuffer>, typeof SinkLike_notify>>;
export default Sink_decodeWithCharsetMixin;
