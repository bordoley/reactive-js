import { Mixin2 } from "../../../__internal__/mixins.js";
import { SinkLike, SinkLike_notify } from "../../../rx.js";
declare const SkipFirstSinkMixin_count: unique symbol;
export interface TProperties {
    [SkipFirstSinkMixin_count]: number;
}
declare const Sink_skipFirstMixin: <T>() => Mixin2<SinkLike<T>, SinkLike<T>, number, unknown, Pick<SinkLike<T>, typeof SinkLike_notify>>;
export default Sink_skipFirstMixin;
