import { Mixin2 } from "../../../__internal__/mixins.js";
import { Predicate } from "../../../functions.js";
import { ObserverLike_notify, SinkLike } from "../../../rx.js";
declare const Sink_keepMixin: <T>() => Mixin2<SinkLike<T>, SinkLike<T>, Predicate<T>, Pick<SinkLike<T>, typeof ObserverLike_notify>>;
export default Sink_keepMixin;
