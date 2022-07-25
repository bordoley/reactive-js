/// <reference types="./InteractiveSourceLike.d.ts" />
import { InteractiveSourceLike_move } from '../ix.mjs';

const move = (source) => {
    source[InteractiveSourceLike_move]();
    return source;
};

export { move };
