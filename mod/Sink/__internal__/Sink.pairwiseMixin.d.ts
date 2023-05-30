import { Mixin1 } from "../../__internal__/mixins.js";
import { Tuple2 } from "../../functions.js";
import { SinkLike, SinkLike_notify } from "../../types.js";
declare const Sink_pairwiseMixin: <T>() => Mixin1<SinkLike<T>, SinkLike<Tuple2<T, T>>, unknown, Pick<SinkLike<T>, typeof SinkLike_notify>>;
export default Sink_pairwiseMixin;
