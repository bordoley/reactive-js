import { EnumeratorLike } from "../../../ix.js";
import { DelegatingEnumeratorLike_delegate } from "../ix.internal.js";
declare const DelegatingEnumerator_move: (enumerator: {
    [DelegatingEnumeratorLike_delegate]: EnumeratorLike;
}) => boolean;
export { DelegatingEnumerator_move as default };
