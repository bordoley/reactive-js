import { Mixin2 } from "../../../__internal__/mixins.mjs";
import { Predicate } from "../../../functions.mjs";
import { SinkLike } from "../../../rx.mjs";
declare const keepMixin: <T>() => Mixin2<SinkLike<T>, SinkLike<T>, Predicate<T>>;
export { keepMixin as default };
