import { Mixin1 } from "../../../__internal__/mixins.mjs";
import { SinkLike } from "../../../rx.mjs";
declare const SinkLike__pairwiseMixin: <T>() => Mixin1<SinkLike<T>, SinkLike<readonly [
    T,
    T
]>>;
export { SinkLike__pairwiseMixin as default };
