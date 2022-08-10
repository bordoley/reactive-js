import { EnumeratorLike, EnumeratorLike_current, SourceLike_move } from "../../util.mjs";
import { DisposableLike } from "./__internal__DisposableLike.mjs";
import { Class } from "./__internal__Objects.mjs";
interface MutableEnumeratorLike<T = unknown> extends EnumeratorLike<T> {
    [EnumeratorLike_current]: T;
}
declare type TEnumeratorMixinReturn<T> = Omit<MutableEnumeratorLike<T>, keyof DisposableLike | typeof SourceLike_move>;
declare const enumeratorMixin: <T>() => Class<TEnumeratorMixinReturn<T>>;
export { MutableEnumeratorLike, enumeratorMixin };
