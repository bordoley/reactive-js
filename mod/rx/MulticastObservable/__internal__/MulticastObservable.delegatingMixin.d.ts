import { Mixin1 } from "../../../__internal__/mixins.js";
import { MulticastObservableLike, MulticastObservableLike_observerCount, ObservableLike_isEnumerable, ObservableLike_isRunnable, ObservableLike_observe } from "../../../rx.js";
declare const MulticastObservable_delegatingMixin: <T>() => Mixin1<MulticastObservableLike<T>, MulticastObservableLike<T>, Pick<MulticastObservableLike<T>, typeof MulticastObservableLike_observerCount | typeof ObservableLike_observe | typeof ObservableLike_isEnumerable | typeof ObservableLike_isRunnable>>;
export default MulticastObservable_delegatingMixin;
