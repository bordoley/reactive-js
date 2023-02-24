import { Mixin1 } from "../../../__internal__/mixins.js";
import { AsyncEnumeratorLike, SourceLike_move } from "../../../ix.js";
import { ObservableLike_isEnumerable, ObservableLike_isRunnable } from "../../../rx.js";
import { DispatcherLike_scheduler } from "../../../scheduling.js";
import { QueueableLike_count, QueueableLike_push } from "../../../util.js";
declare const DelegatingAsyncEnumerator_mixin: <T>() => Mixin1<Pick<AsyncEnumeratorLike<T>, typeof QueueableLike_count | typeof QueueableLike_push | typeof DispatcherLike_scheduler | typeof SourceLike_move | typeof ObservableLike_isEnumerable | typeof ObservableLike_isRunnable>, AsyncEnumeratorLike<T>>;
export default DelegatingAsyncEnumerator_mixin;
