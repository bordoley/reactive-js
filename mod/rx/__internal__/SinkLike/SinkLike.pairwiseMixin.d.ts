import { Mixin1 } from "../../../__internal__/mixins.mjs";
import { SinkLike } from "../../../rx.mjs";
declare const pairwiseMixin: <T>() => Mixin1<SinkLike<T>, SinkLike<readonly [
    T,
    T
]>>;
export { pairwiseMixin as default };
