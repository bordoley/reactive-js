import { Mixin2 } from "../../../__internal__/mixins.js";
import { Function1 } from "../../../functions.js";
import { ReactiveContainerLike, SinkLike, SinkLike_notify } from "../../../rx.js";
declare const Sink_catchErrorMixin: <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<T>, T>() => Mixin2<SinkLike<T>, SinkLike<T>, Function1<unknown, C | void>, Pick<SinkLike<T>, typeof SinkLike_notify>>;
export default Sink_catchErrorMixin;
