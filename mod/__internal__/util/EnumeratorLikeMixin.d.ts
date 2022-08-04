import { EnumeratorLike, EnumeratorLike_current, EnumeratorLike_hasCurrent, SourceLike_move } from "../../util.mjs";
import { DisposableLike } from "./DisposableLikeInternal.mjs";
import { Class, UnknownObject } from "./Object.mjs";
interface MutableEnumeratorLike<T = unknown> extends EnumeratorLike<T> {
    [EnumeratorLike_current]: T;
}
declare type TEnumeratorMixinReturn<T> = Omit<MutableEnumeratorLike<T>, keyof DisposableLike | typeof SourceLike_move>;
declare const enumeratorMixin: <T>() => Class<TEnumeratorMixinReturn<T>, UnknownObject, {
    [EnumeratorLike_current]: T;
    readonly [EnumeratorLike_hasCurrent]: boolean;
}>;
export { MutableEnumeratorLike, enumeratorMixin };
