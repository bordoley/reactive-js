import { Mixin2 } from "../../../__internal__/mixins.mjs";
import { SinkLike } from "../../../rx.mjs";
declare const skipFirstMixin: <T>() => Mixin2<SinkLike<T>, SinkLike<T>, number>;
export { skipFirstMixin as default };
