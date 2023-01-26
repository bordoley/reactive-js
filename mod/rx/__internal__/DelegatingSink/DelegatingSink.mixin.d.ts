import { Mixin1 } from "../../../__internal__/mixins.js";
import { SinkLike } from "../../../rx.js";
import { DelegateSinkLike } from "../rx.internal.js";
declare const DelegateSink_mixin: <T>() => Mixin1<DelegateSinkLike<T>, SinkLike<T>>;
export { DelegateSink_mixin as default };
