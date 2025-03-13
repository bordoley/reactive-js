import { Mixin1 } from "../../__internal__/mixins.js";
import { DisposableContainerLike, QueueableLike } from "../../utils.js";
declare const DelegatingQueueableMixin: <TReq>() => Mixin1<Omit<QueueableLike<TReq>, keyof DisposableContainerLike>, QueueableLike<TReq>>;
export default DelegatingQueueableMixin;
