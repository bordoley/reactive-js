import { DelegatingLike_delegate } from "../../../__internal__/mixins.js";
import { EnumeratorLike } from "../../../ix.js";
declare const DelegatingEnumerator_move: (enumerator: {
    [DelegatingLike_delegate]: EnumeratorLike;
}) => boolean;
export default DelegatingEnumerator_move;
