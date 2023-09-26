import { Mixin2 } from "../../../__internal__/mixins.js";
import { SinkLike, SinkLike_notify } from "../../../rx.js";
declare const TakeFirstSinkMixin_count: unique symbol;
export interface TProperties {
    [TakeFirstSinkMixin_count]: number;
}
declare const Sink_takeFirstMixin: <T>() => Mixin2<SinkLike<T>, SinkLike<T>, number, unknown, Pick<SinkLike<T>, typeof SinkLike_notify>>;
export default Sink_takeFirstMixin;
