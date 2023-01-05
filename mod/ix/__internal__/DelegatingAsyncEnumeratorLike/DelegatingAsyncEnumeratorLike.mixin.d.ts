import { Mixin1 } from "../../../__internal__/mixins.mjs";
import { AsyncEnumeratorLike, SourceLike_move } from "../../../ix.mjs";
import { ObservableLike_isEnumerable, ObservableLike_isRunnable } from "../../../rx.mjs";
import { DispatcherLike_dispatch, DispatcherLike_scheduler } from "../../../scheduling.mjs";
declare const DelegatingAsyncEnumerator__mixin: <T>() => Mixin1<Pick<AsyncEnumeratorLike<T>, typeof DispatcherLike_dispatch | typeof DispatcherLike_scheduler | typeof SourceLike_move | typeof ObservableLike_isEnumerable | typeof ObservableLike_isRunnable>, AsyncEnumeratorLike<T>>;
export { DelegatingAsyncEnumerator__mixin as default };
