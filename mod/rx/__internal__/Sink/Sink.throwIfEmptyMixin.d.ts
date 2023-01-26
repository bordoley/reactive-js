import { Mixin2 } from "../../../__internal__/mixins.js";
import { Factory } from "../../../functions.js";
import { SinkLike } from "../../../rx.js";
declare const Sink$throwIfEmptyMixin: <T>() => Mixin2<SinkLike<T>, SinkLike<T>, Factory<unknown>>;
export { Sink$throwIfEmptyMixin as default };
