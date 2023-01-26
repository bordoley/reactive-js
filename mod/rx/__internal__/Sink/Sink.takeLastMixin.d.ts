import { Mixin2 } from "../../../__internal__/mixins.js";
import { ReactiveContainerLike, SinkLike } from "../../../rx.js";
declare const Sink$takeLastMixin: <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<T>, T>(fromArray: (v: readonly T[]) => C) => Mixin2<SinkLike<T>, TSink, number>;
export { Sink$takeLastMixin as default };
