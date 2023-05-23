import { Mixin } from "../../__internal__/mixins.js";
import { __MutableEnumeratorLike_reset as MutableEnumeratorLike_reset } from "../../__internal__/symbols.js";
import { DisposableLike, EnumeratorLike, EnumeratorLike_current, EnumeratorLike_isCompleted, EnumeratorLike_move } from "../../types.js";
export { MutableEnumeratorLike_reset };
export interface MutableEnumeratorLike<T = unknown> extends EnumeratorLike<T> {
    [EnumeratorLike_current]: T;
    [EnumeratorLike_isCompleted]: boolean;
    [MutableEnumeratorLike_reset](): boolean;
}
type TEnumeratorMixinReturn<T> = Omit<MutableEnumeratorLike<T>, typeof EnumeratorLike_move | keyof DisposableLike>;
declare const MutableEnumerator_mixin: <T>() => Mixin<TEnumeratorMixinReturn<T>>;
export default MutableEnumerator_mixin;
