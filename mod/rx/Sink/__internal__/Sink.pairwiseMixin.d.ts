import { Mixin1 } from "../../../__internal__/mixins.js";
import { Tuple2 } from "../../../functions.js";
import { SinkLike, SinkLike_notify } from "../../../rx.js";
declare const PairwiseSinkMixin_hasPrev: unique symbol;
declare const PairwiseSinkMixin_prev: unique symbol;
export interface TProperties<T> {
    [PairwiseSinkMixin_hasPrev]: boolean;
    [PairwiseSinkMixin_prev]: T;
}
declare const Sink_pairwiseMixin: <T>() => Mixin1<SinkLike<T>, SinkLike<Tuple2<T, T>>, unknown, Pick<SinkLike<T>, typeof SinkLike_notify>>;
export default Sink_pairwiseMixin;
