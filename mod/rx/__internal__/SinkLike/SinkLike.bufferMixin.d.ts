import { Mixin2 } from "../../../__internal__/mixins.mjs";
import { ReactiveContainerLike, SinkLike } from "../../../rx.mjs";
declare const bufferMixin: <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<readonly T[]>, T>(fromArray: (v: readonly T[][]) => C) => Mixin2<SinkLike<T>, TSink, number>;
export { bufferMixin as default };
