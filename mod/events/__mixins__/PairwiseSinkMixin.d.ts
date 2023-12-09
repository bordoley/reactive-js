import { Mixin1 } from "../../__internal__/mixins.js";
import { SinkLike, SinkLike_notify } from "../../events.js";
import { Tuple2 } from "../../functions.js";
declare const PairwiseSinkMixin: <T>() => Mixin1<SinkLike<T>, SinkLike<Tuple2<T, T>>, unknown, Pick<SinkLike<T>, typeof SinkLike_notify>>;
export default PairwiseSinkMixin;
