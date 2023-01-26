import { Mixin2 } from "../../../__internal__/mixins.js";
import { Function1 } from "../../../functions.js";
import { ReactiveContainerLike, SinkLike } from "../../../rx.js";
declare const Sink$catchErrorMixin: <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<T>, T>() => Mixin2<SinkLike<T>, SinkLike<T>, Function1<unknown, C | void>>;
export { Sink$catchErrorMixin as default };
