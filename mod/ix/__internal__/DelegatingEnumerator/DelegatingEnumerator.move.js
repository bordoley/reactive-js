/// <reference types="./DelegatingEnumerator.move.d.ts" />

import { DelegatingLike_delegate } from "../../../__internal__/mixins.js";
import { EnumeratorLike_hasCurrent, SourceLike_move, } from "../../../ix.js";
const DelegatingEnumerator_move = (enumerator) => {
    enumerator[DelegatingLike_delegate][SourceLike_move]();
    return enumerator[DelegatingLike_delegate][EnumeratorLike_hasCurrent];
};
export default DelegatingEnumerator_move;
