import { Mixin1 } from "../../../__internal__/mixins.js";
import { EnumeratorLike, SourceLike_move } from "../../../ix.js";
import { DisposableLike } from "../../../util.js";
type TDelegatingEnumeratorMixinReturn<T> = Omit<EnumeratorLike<T>, keyof DisposableLike | typeof SourceLike_move>;
declare const DelegatingEnumerator$mixin: <T>() => Mixin1<TDelegatingEnumeratorMixinReturn<T>, EnumeratorLike<T>>;
export { DelegatingEnumerator$mixin as default };
