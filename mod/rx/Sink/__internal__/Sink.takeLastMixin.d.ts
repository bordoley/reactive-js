import { Mixin2 } from "../../../__internal__/mixins.js";
import { ReactiveContainerLike, SinkLike, SinkLike_notify } from "../../../rx.js";
declare const Sink_takeLastMixin: <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<T>, T>(fromReadonlyArray: (v: readonly T[]) => C) => Mixin2<SinkLike<T>, TSink, number, Pick<SinkLike<T>, typeof SinkLike_notify>>;
export default Sink_takeLastMixin;
