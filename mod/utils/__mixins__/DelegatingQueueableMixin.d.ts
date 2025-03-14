import { Mixin1 } from "../../__internal__/mixins.js";
import { QueueableLike } from "../../utils.js";
declare const DelegatingQueueableMixin: <TReq>() => Mixin1<QueueableLike<TReq>, QueueableLike<TReq>>;
export default DelegatingQueueableMixin;
