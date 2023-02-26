import { Mixin2 } from "../../../__internal__/mixins.js";
import { Predicate } from "../../../functions.js";
import { ReactiveContainerLike, SinkLike, SinkLike_notify } from "../../../rx.js";
declare const Sink_someSatisfyMixin: <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<boolean>, T>(fromReadonlyArray: (v: readonly boolean[]) => C) => Mixin2<SinkLike<T>, TSink, Predicate<T>, Pick<SinkLike<T>, typeof SinkLike_notify>>;
export default Sink_someSatisfyMixin;
