import { Mixin1 } from "../../../__internal__/mixins.js";
import { SinkLike } from "../../../rx.js";
declare const SinkLike__pairwiseMixin: <T>() => Mixin1<SinkLike<T>, SinkLike<readonly [
    T,
    T
]>>;
export { SinkLike__pairwiseMixin as default };
