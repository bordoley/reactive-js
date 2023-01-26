import { Mixin1 } from "../../../__internal__/mixins.js";
import { SinkLike } from "../../../rx.js";
declare const Sink$pairwiseMixin: <T>() => Mixin1<SinkLike<T>, SinkLike<readonly [
    T,
    T
]>>;
export { Sink$pairwiseMixin as default };
