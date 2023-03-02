import { Mixin1 } from "../../../__internal__/mixins.js";
import { EnumeratorLike, EnumeratorLike_move } from "../../../rx.js";
import { DisposableLike } from "../../../util.js";
type TDelegatingEnumeratorMixinReturn<T> = Omit<EnumeratorLike<T>, keyof DisposableLike | typeof EnumeratorLike_move>;
declare const DelegatingEnumerator_mixin: <T>() => Mixin1<TDelegatingEnumeratorMixinReturn<T>, EnumeratorLike<T>>;
export default DelegatingEnumerator_mixin;
