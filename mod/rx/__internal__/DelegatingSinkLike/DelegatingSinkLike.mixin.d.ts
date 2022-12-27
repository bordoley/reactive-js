import { Mixin1 } from "../../../__internal__/mixins.mjs";
import { SinkLike } from "../../../rx.mjs";
import { DelegateSinkLike } from "../rx.internal.mjs";
declare const mixin: <T>() => Mixin1<DelegateSinkLike<T>, SinkLike<T>>;
export { mixin as default };
