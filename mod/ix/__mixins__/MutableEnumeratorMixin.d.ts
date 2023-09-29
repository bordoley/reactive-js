import { Mixin } from "../../__internal__/mixins.js";
import { EnumeratorLike, EnumeratorLike_current, EnumeratorLike_isCompleted, EnumeratorLike_move } from "../../ix.js";
import { DisposableLike } from "../../utils.js";
export declare const MutableEnumeratorLike_reset: unique symbol;
export interface MutableEnumeratorLike<T = unknown> extends EnumeratorLike<T> {
    [EnumeratorLike_current]: T;
    [EnumeratorLike_isCompleted]: boolean;
    [MutableEnumeratorLike_reset](): boolean;
}
type TEnumeratorMixinReturn<T> = Omit<MutableEnumeratorLike<T>, typeof EnumeratorLike_move | keyof DisposableLike>;
declare const MutableEnumeratorMixin: <T>() => Mixin<TEnumeratorMixinReturn<T>>;
export default MutableEnumeratorMixin;
