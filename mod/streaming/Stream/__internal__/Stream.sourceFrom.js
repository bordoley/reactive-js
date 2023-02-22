/// <reference types="./Stream.sourceFrom.d.ts" />

import { pipe } from "../../../functions.js";
import Streamable_sinkInto from "../../Streamable/__internal__/Streamable.sinkInto.js";
const Stream_sourceFrom = (streamable) => dest => {
    pipe(streamable, Streamable_sinkInto(dest));
    return dest;
};
export default Stream_sourceFrom;
