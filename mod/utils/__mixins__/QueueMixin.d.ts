import { Mixin1 } from "../../__internal__/mixins.js";
import { Comparator, Optional } from "../../functions.js";
import { QueueLike, QueueLike_count } from "../../utils.js";
declare const QueueMixin: <T>() => Mixin1<QueueLike<T>, Optional<{
    comparator?: Comparator<T>;
}>, unknown, Omit<QueueLike<T>, typeof QueueLike_count>>;
export default QueueMixin;
