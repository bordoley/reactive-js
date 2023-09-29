import { Mixin3 } from "../../../__internal__/mixins.js";
import { Optional, Predicate } from "../../../functions.js";
import { SinkLike, SinkLike_notify } from "../../../rx.js";
declare const Sink_takeWhileMixin: <T>() => Mixin3<SinkLike<T>, SinkLike<T>, Predicate<T>, Optional<boolean>, unknown, Pick<SinkLike<T>, typeof SinkLike_notify>>;
export default Sink_takeWhileMixin;
