import { Mixin } from "../../../__internal__/mixins.mjs";
import { SourceLike_move } from "../../../ix.mjs";
import { DisposableLike } from "../../../util.mjs";
import { MutableEnumeratorLike } from "../ix.internal.mjs";
declare type TEnumeratorMixinReturn<T> = Omit<MutableEnumeratorLike<T>, keyof DisposableLike | typeof SourceLike_move>;
declare const MutableEnumeratorLike__mixin: <T>() => Mixin<TEnumeratorMixinReturn<T>>;
export { MutableEnumeratorLike__mixin as default };
