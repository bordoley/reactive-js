import { Mixin2 } from "../../../__internal__/mixins.js";
import { ObservableLike, ObserverLike, SinkLike } from "../../../rx.js";
declare const Sink_bufferMixin: <C extends ObservableLike, T>(fromReadonlyArray: (v: readonly T[][]) => C) => Mixin2<SinkLike<T>, ObserverLike<T[]>, number>;
export default Sink_bufferMixin;
