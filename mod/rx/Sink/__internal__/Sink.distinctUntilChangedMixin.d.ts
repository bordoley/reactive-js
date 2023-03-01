import { Mixin2 } from "../../../__internal__/mixins.js";
import { Equality } from "../../../functions.js";
import { ObserverLike_notify, SinkLike } from "../../../rx.js";
declare const Sink_distinctUntilChangedMixin: <T>() => Mixin2<SinkLike<T>, SinkLike<T>, Equality<T>, Pick<SinkLike<T>, typeof ObserverLike_notify>>;
export default Sink_distinctUntilChangedMixin;
