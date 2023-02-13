import { Mixin2 } from "../../../__internal__/mixins.js";
import { Predicate } from "../../../functions.js";
import { ReactiveContainerLike, SinkLike } from "../../../rx.js";
declare const Sink_satisfyMixin: <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<boolean>, T>(fromReadonlyArray: (v: readonly boolean[]) => C, defaultResult: boolean) => Mixin2<SinkLike<T>, TSink, Predicate<T>>;
export { Sink_satisfyMixin as default };
