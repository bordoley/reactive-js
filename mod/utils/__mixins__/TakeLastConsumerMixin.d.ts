import { Mixin1 } from "../../__internal__/mixins.js";
import { IterableLike } from "../../computations.js";
import { ConsumerLike } from "../../utils.js";
declare const TakeLastConsumerMixin: <T>() => Mixin1<ConsumerLike<T> & IterableLike<T>, number>;
export default TakeLastConsumerMixin;
