import { Mixin2 } from "../../../__internal__/mixins.js";
import { Predicate } from "../../../functions.js";
import { SinkLike, SinkLike_notify } from "../../../rx.js";
declare const Sink_keepMixin: <T>() => Mixin2<SinkLike<T>, SinkLike<T>, Predicate<T>, Pick<SinkLike<T>, typeof SinkLike_notify>>;
export default Sink_keepMixin;
