import { EnumeratorLike, EnumeratorLike_current, EnumeratorLike_hasCurrent } from "../../util.mjs";
import { Object_init, Object_properties, Object_prototype } from "./Object.mjs";
interface MutableEnumeratorLike<T = unknown> extends EnumeratorLike<T> {
    [EnumeratorLike_current]: T;
}
declare const enumeratorMixin: <T>() => {
    [Object_init](this: unknown): void;
    [Object_properties]: Record<string | symbol | number, unknown>;
    [Object_prototype]: {
        [EnumeratorLike_current]: T;
        readonly [EnumeratorLike_hasCurrent]: boolean;
    };
};
export { MutableEnumeratorLike, enumeratorMixin };
