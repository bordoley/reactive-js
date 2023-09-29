import { Mixin1 } from "../../__internal__/mixins.js";
import { Tuple2 } from "../../functions.js";
import { SinkLike, SinkLike_notify } from "../../rx.js";
declare const PairwiseSinkMixin: <T>() => Mixin1<SinkLike<T>, SinkLike<Tuple2<T, T>>, unknown, Pick<SinkLike<T>, typeof SinkLike_notify>>;
export default PairwiseSinkMixin;
