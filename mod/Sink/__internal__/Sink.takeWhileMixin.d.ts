import { Mixin3 } from "../../__internal__/mixins.js";
import { Predicate } from "../../functions.js";
import { SinkLike, SinkLike_notify } from "../../types.js";
declare const Sink_takeWhileMixin: <T>() => Mixin3<SinkLike<T>, SinkLike<T>, Predicate<T>, boolean, unknown, Pick<SinkLike<T>, typeof SinkLike_notify>>;
export default Sink_takeWhileMixin;
