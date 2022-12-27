/// <reference types="./SourceLike.move.d.ts" />
import { SourceLike_move } from '../../../ix.mjs';

const move = (source) => {
    source[SourceLike_move]();
    return source;
};

export { move as default };
