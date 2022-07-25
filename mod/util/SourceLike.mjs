/// <reference types="./SourceLike.d.ts" />
import { SourceLike_move } from '../util.mjs';

const move = (source) => {
    source[SourceLike_move]();
    return source;
};

export { move };
