/// <reference types="./EnumeratorLike.move.d.ts" />
import '../../../ix.mjs';
import move$1 from '../SourceLike/SourceLike.move.mjs';
import hasCurrent from './EnumeratorLike.hasCurrent.mjs';

const move = (enumerator) => {
    move$1(enumerator);
    return hasCurrent(enumerator);
};

export { move as default };
