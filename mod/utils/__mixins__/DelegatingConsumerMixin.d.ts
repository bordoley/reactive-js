import { Mixin1 } from "../../__internal__/mixins.js";
import { ConsumerLike, DisposableLike } from "../../utils.js";
declare const DelegatingConsumerMixin: <TReq>() => Mixin1<Omit<ConsumerLike<TReq>, keyof DisposableLike>, ConsumerLike<TReq>, unknown, Omit<ConsumerLike<TReq>, keyof DisposableLike>>;
export default DelegatingConsumerMixin;
