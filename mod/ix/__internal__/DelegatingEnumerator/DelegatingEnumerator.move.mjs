/// <reference types="./DelegatingEnumerator.move.d.ts" />
import { SourceLike_move, EnumeratorLike_hasCurrent } from '../../../ix.mjs';
import { DelegatingEnumeratorLike_delegate } from '../ix.internal.mjs';

const DelegatingEnumerator_move = (enumerator) => {
    enumerator[DelegatingEnumeratorLike_delegate][SourceLike_move]();
    return enumerator[DelegatingEnumeratorLike_delegate][EnumeratorLike_hasCurrent];
};

export { DelegatingEnumerator_move as default };
