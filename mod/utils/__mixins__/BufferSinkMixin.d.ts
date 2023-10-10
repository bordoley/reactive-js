import { Mixin3 } from "../../__internal__/mixins.js";
import { SideEffect1 } from "../../functions.js";
import { SinkLike, SinkLike_notify } from "../../utils.js";
declare const BufferSinkMixin: <T>() => Mixin3<SinkLike<T>, SinkLike<readonly T[]>, number, SideEffect1<readonly T[]>, unknown, Pick<SinkLike<T>, typeof SinkLike_notify>>;
export default BufferSinkMixin;
