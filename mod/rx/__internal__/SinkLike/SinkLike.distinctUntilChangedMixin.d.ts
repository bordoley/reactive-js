import { Mixin2 } from "../../../__internal__/mixins.mjs";
import { Equality } from "../../../functions.mjs";
import { SinkLike } from "../../../rx.mjs";
declare const SinkLike__distinctUntilChangedMixin: <T>() => Mixin2<SinkLike<T>, SinkLike<T>, Equality<T>>;
export { SinkLike__distinctUntilChangedMixin as default };
