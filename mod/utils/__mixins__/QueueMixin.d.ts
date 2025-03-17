import { Mixin1 } from "../../__internal__/mixins.js";
import { Comparator, Optional } from "../../functions.js";
import { CollectionEnumeratorLike_count, EnumeratorLike_current, EnumeratorLike_hasCurrent, QueueLike } from "../../utils.js";
declare const QueueMixin: <T>() => Mixin1<QueueLike<T>, Optional<{
    comparator?: Comparator<T>;
}>, unknown, Omit<QueueLike<T>, typeof CollectionEnumeratorLike_count | typeof EnumeratorLike_current | typeof EnumeratorLike_hasCurrent>>;
export default QueueMixin;
