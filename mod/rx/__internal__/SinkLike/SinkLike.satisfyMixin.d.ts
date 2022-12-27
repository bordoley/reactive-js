import { Mixin2 } from "../../../__internal__/mixins.mjs";
import { Predicate } from "../../../functions.mjs";
import { ReactiveContainerLike, SinkLike } from "../../../rx.mjs";
declare const satisfyMixin: <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<boolean>, T>(fromArray: (v: readonly boolean[]) => C, defaultResult: boolean) => Mixin2<SinkLike<T>, TSink, Predicate<T>>;
export { satisfyMixin as default };
