import { Mixin1 } from "../../../__internal__/mixins.js";
import { ObserverLike_notify, SinkLike } from "../../../rx.js";
declare const Sink_pairwiseMixin: <T>() => Mixin1<SinkLike<T>, SinkLike<readonly [T, T]>, Pick<SinkLike<T>, typeof ObserverLike_notify>>;
export default Sink_pairwiseMixin;
