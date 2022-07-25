import { Factory } from "../../functions.mjs";
import { EnumeratorLike, EnumeratorLike_current, EnumeratorLike_hasCurrent } from "../../util.mjs";
import { Object_init } from "./Object.mjs";
declare const Enumerator_private_current: unique symbol;
declare const Enumerator_private_hasCurrent: unique symbol;
interface MutableEnumeratorLike<T = unknown> extends EnumeratorLike<T> {
    [EnumeratorLike_current]: T;
}
declare const properties: {
    [Enumerator_private_current]: unknown;
    [Enumerator_private_hasCurrent]: boolean;
};
declare const prototype: {
    [Object_init](this: typeof properties): void;
    [EnumeratorLike_current]: unknown;
    readonly [EnumeratorLike_hasCurrent]: boolean;
};
declare const neverEnumerator: Factory<EnumeratorLike>;
export { MutableEnumeratorLike, neverEnumerator, properties, prototype };
