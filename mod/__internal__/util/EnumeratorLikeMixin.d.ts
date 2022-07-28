import { EnumeratorLike, EnumeratorLike_current, EnumeratorLike_hasCurrent } from "../../util.mjs";
import { Object_properties, Object_init } from "./Object.mjs";
interface MutableEnumeratorLike<T = unknown> extends EnumeratorLike<T> {
    [EnumeratorLike_current]: T;
}
declare const enumeratorMixin: <T>() => {
    [Object_properties]: unknown;
    [Object_init](this: unknown): void;
    [EnumeratorLike_current]: T;
    readonly [EnumeratorLike_hasCurrent]: boolean;
};
export { MutableEnumeratorLike, enumeratorMixin };
