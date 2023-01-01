/// <reference types="./EnumeratorLike.move.d.ts" />
import '../../../ix.mjs';
import SourceLike__move from '../SourceLike/SourceLike.move.mjs';
import EnumeratorLike__hasCurrent from './EnumeratorLike.hasCurrent.mjs';

const EnumeratorLike__move = (enumerator) => {
    SourceLike__move(enumerator);
    return EnumeratorLike__hasCurrent(enumerator);
};

export { EnumeratorLike__move as default };
