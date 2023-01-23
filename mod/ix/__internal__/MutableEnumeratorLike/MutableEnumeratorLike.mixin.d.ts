import { Mixin } from "../../../__internal__/mixins.js";
import { SourceLike_move } from "../../../ix.js";
import { DisposableLike } from "../../../util.js";
import { MutableEnumeratorLike } from "../ix.internal.js";
type TEnumeratorMixinReturn<T> = Omit<MutableEnumeratorLike<T>, keyof DisposableLike | typeof SourceLike_move>;
declare const MutableEnumeratorLike__mixin: <T>() => Mixin<TEnumeratorMixinReturn<T>>;
export { MutableEnumeratorLike__mixin as default };
