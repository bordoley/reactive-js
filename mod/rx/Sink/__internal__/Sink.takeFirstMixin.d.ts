import { Mixin2 } from "../../../__internal__/mixins.js";
import { Optional } from "../../../functions.js";
import { SinkLike, SinkLike_notify } from "../../../rx.js";
declare const Sink_takeFirstMixin: <T>() => Mixin2<SinkLike<T>, SinkLike<T>, Optional<number>, unknown, Pick<SinkLike<T>, typeof SinkLike_notify>>;
export default Sink_takeFirstMixin;
