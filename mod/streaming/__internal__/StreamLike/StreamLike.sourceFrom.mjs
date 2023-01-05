/// <reference types="./StreamLike.sourceFrom.d.ts" />
import { pipe } from '../../../functions.mjs';
import StreamableLike__sinkInto from '../StreamableLike/StreamableLike.sinkInto.mjs';

const StreamLike__sourceFrom = (streamable) => dest => {
    pipe(streamable, StreamableLike__sinkInto(dest));
    return dest;
};

export { StreamLike__sourceFrom as default };
