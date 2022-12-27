import { Mixin1 } from "../../../__internal__/mixins.mjs";
import { EnumeratorLike, SourceLike_move } from "../../../ix.mjs";
import { DisposableLike } from "../../../util.mjs";
declare type TDelegatingEnumeratorMixinReturn<T> = Omit<EnumeratorLike<T>, keyof DisposableLike | typeof SourceLike_move>;
declare const mixin: <T>() => Mixin1<TDelegatingEnumeratorMixinReturn<T>, EnumeratorLike<T>>;
export { mixin as default };
