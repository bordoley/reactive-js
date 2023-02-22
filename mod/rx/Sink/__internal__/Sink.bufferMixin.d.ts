import { Mixin2 } from "../../../__internal__/mixins.js";
import { ReactiveContainerLike, SinkLike } from "../../../rx.js";
declare const Sink_bufferMixin: <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<readonly T[]>, T>(fromReadonlyArray: (v: readonly T[][]) => C) => Mixin2<SinkLike<T>, TSink, number>;
export default Sink_bufferMixin;
