import { Mixin1 } from "../../__internal__/mixins.js";
import { CollectionEnumeratorLike, ConsumerLike } from "../../utils.js";
declare const TakeLastConsumerMixin: <T>() => Mixin1<ConsumerLike<T> & CollectionEnumeratorLike<T>, number>;
export default TakeLastConsumerMixin;
