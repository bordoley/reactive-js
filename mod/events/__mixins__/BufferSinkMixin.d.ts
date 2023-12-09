import { Mixin3 } from "../../__internal__/mixins.js";
import { SinkLike, SinkLike_notify } from "../../events.js";
import { SideEffect1 } from "../../functions.js";
declare const BufferSinkMixin: <T>() => Mixin3<SinkLike<T>, SinkLike<readonly T[]>, number, SideEffect1<readonly T[]>, unknown, Pick<SinkLike<T>, typeof SinkLike_notify>>;
export default BufferSinkMixin;
