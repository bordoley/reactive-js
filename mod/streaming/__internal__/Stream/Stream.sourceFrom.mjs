/// <reference types="./Stream.sourceFrom.d.ts" />
import { pipe } from '../../../functions.mjs';
import Streamable$sinkInto from '../Streamable/Streamable.sinkInto.mjs';

const Stream$sourceFrom = (streamable) => dest => {
    pipe(streamable, Streamable$sinkInto(dest));
    return dest;
};

export { Stream$sourceFrom as default };
