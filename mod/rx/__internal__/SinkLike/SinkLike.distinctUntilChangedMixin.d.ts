import { Mixin2 } from "../../../__internal__/mixins.js";
import { Equality } from "../../../functions.js";
import { SinkLike } from "../../../rx.js";
declare const SinkLike__distinctUntilChangedMixin: <T>() => Mixin2<SinkLike<T>, SinkLike<T>, Equality<T>>;
export { SinkLike__distinctUntilChangedMixin as default };
