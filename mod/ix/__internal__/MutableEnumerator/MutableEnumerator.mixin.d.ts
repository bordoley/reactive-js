import { Mixin } from "../../../__internal__/mixins.js";
import { SourceLike_move } from "../../../ix.js";
import { DisposableLike } from "../../../util.js";
import { MutableEnumeratorLike } from "../ix.internal.js";
type TEnumeratorMixinReturn<T> = Omit<MutableEnumeratorLike<T>, keyof DisposableLike | typeof SourceLike_move>;
declare const MutableEnumerator$mixin: <T>() => Mixin<TEnumeratorMixinReturn<T>>;
export { MutableEnumerator$mixin as default };
