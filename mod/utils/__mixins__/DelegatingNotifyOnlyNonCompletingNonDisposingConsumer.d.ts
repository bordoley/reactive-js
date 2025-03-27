import { Mixin1 } from "../../__internal__/mixins.js";
import { ConsumerLike } from "../../utils.js";
declare const DelegatingNotifyOnlyNonCompletingNonDisposingConsumer: <T>() => Mixin1<ConsumerLike<T>, ConsumerLike<T>>;
export default DelegatingNotifyOnlyNonCompletingNonDisposingConsumer;
