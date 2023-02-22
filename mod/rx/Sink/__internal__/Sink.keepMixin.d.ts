import { Mixin2 } from "../../../__internal__/mixins.js";
import { Predicate } from "../../../functions.js";
import { SinkLike } from "../../../rx.js";
declare const Sink_keepMixin: <T>() => Mixin2<SinkLike<T>, SinkLike<T>, Predicate<T>>;
export default Sink_keepMixin;
