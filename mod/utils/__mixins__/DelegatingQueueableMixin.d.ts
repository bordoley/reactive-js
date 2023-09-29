import { Mixin1 } from "../../__internal__/mixins.js";
import { QueueableLike } from "../../utils.js";
declare const DelegatingQueueableMixin: <T>() => Mixin1<QueueableLike<T>, QueueableLike<T>>;
export default DelegatingQueueableMixin;
