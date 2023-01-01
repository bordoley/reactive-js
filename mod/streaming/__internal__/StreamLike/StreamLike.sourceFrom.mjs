/// <reference types="./StreamLike.sourceFrom.d.ts" />
import { pipe } from '../../../functions.mjs';
import { sinkInto } from '../../StreamableLike.mjs';

const StreamLike__sourceFrom = (streamable) => dest => {
    pipe(streamable, sinkInto(dest));
    return dest;
};

export { StreamLike__sourceFrom as default };
