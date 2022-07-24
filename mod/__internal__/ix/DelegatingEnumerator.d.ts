import { EnumeratorLike, EnumeratorLike_current, EnumeratorLike_hasCurrent } from "../../ix/EnumeratorLike.mjs";
import { Option } from "../../util/Option.mjs";
import { Object_init } from "../util/Object.mjs";
declare const DelegatingEnumerator_private_delegate: unique symbol;
declare const properties: {
    [DelegatingEnumerator_private_delegate]: Option<EnumeratorLike>;
};
declare const prototype: {
    [Object_init](this: typeof properties, delegate: EnumeratorLike): void;
    readonly [EnumeratorLike_current]: unknown;
    readonly [EnumeratorLike_hasCurrent]: boolean;
};
declare const move: (enumerator: typeof properties) => boolean;
export { move, properties, prototype };
