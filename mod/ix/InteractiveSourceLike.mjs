/// <reference types="./InteractiveSourceLike.d.ts" />
const InteractiveSourceLike_move = Symbol("InteractiveSourceLike_move");
const move = (source) => {
    source[InteractiveSourceLike_move]();
    return source;
};

export { InteractiveSourceLike_move, move };
