import { Mixin2 } from "../../../__internal__/mixins.mjs";
import { SideEffect1 } from "../../../functions.mjs";
import { SinkLike } from "../../../rx.mjs";
declare const forEachMixin: <T>() => Mixin2<SinkLike<T>, SinkLike<T>, SideEffect1<T>>;
export { forEachMixin as default, forEachMixin };
