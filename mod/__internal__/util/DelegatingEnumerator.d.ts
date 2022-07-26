import { EnumeratorLike, EnumeratorLike_current, EnumeratorLike_hasCurrent } from "../../util.mjs";
import { Object_properties, Object_init } from "./Object.mjs";
declare const DelegatingEnumerator_private_delegate: unique symbol;
declare const properties: {
    [DelegatingEnumerator_private_delegate]: EnumeratorLike<unknown>;
};
declare const prototype: {
    [Object_properties]: {
        [DelegatingEnumerator_private_delegate]: EnumeratorLike<unknown>;
    };
    [Object_init](this: typeof properties, delegate: EnumeratorLike): void;
    readonly [EnumeratorLike_current]: unknown;
    readonly [EnumeratorLike_hasCurrent]: boolean;
};
declare const move: (enumerator: typeof properties) => boolean;
export { move, prototype };
