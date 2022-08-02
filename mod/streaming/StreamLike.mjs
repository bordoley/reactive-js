/// <reference types="./StreamLike.d.ts" />
import { pipe } from '../functions.mjs';
import { sinkInto } from './StreamableLike.mjs';

const sourceFrom = (streamable) => dest => {
    pipe(streamable, sinkInto(dest));
    return dest;
};

export { sourceFrom };
