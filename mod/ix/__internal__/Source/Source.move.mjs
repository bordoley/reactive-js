/// <reference types="./Source.move.d.ts" />
import { SourceLike_move } from '../../../ix.mjs';

const Source$move = (source) => {
    source[SourceLike_move]();
    return source;
};

export { Source$move as default };
