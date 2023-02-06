/// <reference types="./DelegatingEnumerator.move.d.ts" />
import { DelegatingLike_delegate } from '../../../__internal__/mixins.mjs';
import { SourceLike_move, EnumeratorLike_hasCurrent } from '../../../ix.mjs';

const DelegatingEnumerator_move = (enumerator) => {
    enumerator[DelegatingLike_delegate][SourceLike_move]();
    return enumerator[DelegatingLike_delegate][EnumeratorLike_hasCurrent];
};

export { DelegatingEnumerator_move as default };
