import { Mixin2 } from "../../../__internal__/mixins.js";
import { ObserverLike_notify, SinkLike } from "../../../rx.js";
declare const Sink_skipFirstMixin: <T>() => Mixin2<SinkLike<T>, SinkLike<T>, number, Pick<SinkLike<T>, typeof ObserverLike_notify>>;
export default Sink_skipFirstMixin;
