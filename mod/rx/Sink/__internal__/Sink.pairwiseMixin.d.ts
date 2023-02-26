import { Mixin1 } from "../../../__internal__/mixins.js";
import { SinkLike, SinkLike_notify } from "../../../rx.js";
declare const Sink_pairwiseMixin: <T>() => Mixin1<SinkLike<T>, SinkLike<readonly [T, T]>, Pick<SinkLike<T>, typeof SinkLike_notify>>;
export default Sink_pairwiseMixin;
