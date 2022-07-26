import { Factory } from "../../functions.mjs";
import { EnumeratorLike, EnumeratorLike_current, EnumeratorLike_hasCurrent } from "../../util.mjs";
import { Object_properties, Object_init } from "./Object.mjs";
declare const Enumerator_private_current: unique symbol;
declare const Enumerator_private_hasCurrent: unique symbol;
interface MutableEnumeratorLike<T = unknown> extends EnumeratorLike<T> {
    [EnumeratorLike_current]: T;
}
declare type TProperties = {
    [Enumerator_private_current]: unknown;
    [Enumerator_private_hasCurrent]: boolean;
};
declare const prototype: {
    [Object_properties]: {
        [Enumerator_private_current]: any;
        [Enumerator_private_hasCurrent]: boolean;
    };
    [Object_init](this: TProperties): void;
    [EnumeratorLike_current]: unknown;
    readonly [EnumeratorLike_hasCurrent]: boolean;
};
declare const neverEnumerator: Factory<EnumeratorLike>;
export { MutableEnumeratorLike, neverEnumerator, prototype };
