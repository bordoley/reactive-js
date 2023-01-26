/// <reference types="./Stream.sourceFrom.d.ts" />
import { pipe } from '../../../functions.mjs';
import Streamable_sinkInto from '../Streamable/Streamable.sinkInto.mjs';

const Stream_sourceFrom = (streamable) => dest => {
    pipe(streamable, Streamable_sinkInto(dest));
    return dest;
};

export { Stream_sourceFrom as default };
