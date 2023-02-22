import { Mixin1 } from "../../../__internal__/mixins.js";
import { SinkLike } from "../../../rx.js";
declare const Sink_pairwiseMixin: <T>() => Mixin1<SinkLike<T>, SinkLike<readonly [T, T]>>;
export default Sink_pairwiseMixin;
