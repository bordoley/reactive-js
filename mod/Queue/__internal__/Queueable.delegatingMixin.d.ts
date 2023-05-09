import { Mixin1 } from "../../__internal__/mixins.js";
import { QueueableLike } from "../../types.js";
declare const Queueable_delegatingMixin: <T>() => Mixin1<QueueableLike<T>, QueueableLike<T>>;
export default Queueable_delegatingMixin;
