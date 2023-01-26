import { Mixin2 } from "../../../__internal__/mixins.js";
import { Predicate } from "../../../functions.js";
import { ReactiveContainerLike, SinkLike } from "../../../rx.js";
declare const Sink$everySatisfyMixin: <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<boolean>, T>(fromArray: (v: readonly boolean[]) => C) => Mixin2<SinkLike<T>, TSink, Predicate<T>>;
export { Sink$everySatisfyMixin as default };
