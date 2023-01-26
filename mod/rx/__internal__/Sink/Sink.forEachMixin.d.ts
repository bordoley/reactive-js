import { Mixin2 } from "../../../__internal__/mixins.js";
import { SideEffect1 } from "../../../functions.js";
import { SinkLike } from "../../../rx.js";
declare const Sink$forEachMixin: <T>() => Mixin2<SinkLike<T>, SinkLike<T>, SideEffect1<T>>;
export { Sink$forEachMixin, Sink$forEachMixin as default };
