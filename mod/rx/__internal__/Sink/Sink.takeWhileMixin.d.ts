import { Mixin3 } from "../../../__internal__/mixins.js";
import { Predicate } from "../../../functions.js";
import { SinkLike } from "../../../rx.js";
declare const Sink$takeWhileMixin: <T>() => Mixin3<SinkLike<T>, SinkLike<T>, Predicate<T>, boolean>;
export { Sink$takeWhileMixin as default };
