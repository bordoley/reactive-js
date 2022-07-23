import { EnumeratorLike, EnumeratorLike_current, EnumeratorLike_hasCurrent } from '../../ix/EnumeratorLike.js';
import { Option } from '../../util/Option.js';
declare const Enumerator_private_delegate: unique symbol;
declare const properties: {
    [Enumerator_private_delegate]: Option<EnumeratorLike>;
};
declare const prototype: {
    readonly [EnumeratorLike_current]: unknown;
    readonly [EnumeratorLike_hasCurrent]: boolean;
};
declare const init: <T>(self: typeof properties & typeof prototype, delegate: EnumeratorLike<T>) => void;
declare const move: (enumerator: typeof properties) => boolean;
export { init, move, properties, prototype };
