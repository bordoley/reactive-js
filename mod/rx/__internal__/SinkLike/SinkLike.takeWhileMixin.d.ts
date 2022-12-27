import { Mixin3 } from "../../../__internal__/mixins.mjs";
import { Predicate } from "../../../functions.mjs";
import { SinkLike } from "../../../rx.mjs";
declare const takeWhileMixin: <T>() => Mixin3<SinkLike<T>, SinkLike<T>, Predicate<T>, boolean>;
export { takeWhileMixin as default };
