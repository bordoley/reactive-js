import { Mixin2 } from "../../../__internal__/mixins.mjs";
import { SinkLike } from "../../../rx.mjs";
declare const takeFirstMixin: <T>() => Mixin2<SinkLike<T>, SinkLike<T>, number>;
export { takeFirstMixin as default };
