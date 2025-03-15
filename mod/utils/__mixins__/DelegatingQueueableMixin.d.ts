import { Mixin1 } from "../../__internal__/mixins.js";
import { DisposableLike, QueueableLike } from "../../utils.js";
declare const DelegatingQueueableMixin: <TReq>() => Mixin1<Omit<QueueableLike<TReq>, keyof DisposableLike>, QueueableLike<TReq>, unknown, Omit<QueueableLike<TReq>, keyof DisposableLike>>;
export default DelegatingQueueableMixin;
