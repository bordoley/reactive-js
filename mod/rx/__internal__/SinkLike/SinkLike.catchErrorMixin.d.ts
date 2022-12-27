import { Mixin2 } from "../../../__internal__/mixins.mjs";
import { Function1 } from "../../../functions.mjs";
import { ReactiveContainerLike, SinkLike } from "../../../rx.mjs";
declare const catchErrorMixin: <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<T>, T>() => Mixin2<SinkLike<T>, SinkLike<T>, Function1<unknown, C | void>>;
export { catchErrorMixin as default };
