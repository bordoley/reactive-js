/// <reference types="./Sink.sourceFrom.d.ts" />

import { ReactiveContainerLike_sinkInto, } from "../../../rx.js";
const Sink_sourceFrom = (source) => sink => {
    source[ReactiveContainerLike_sinkInto](sink);
    return sink;
};
export default Sink_sourceFrom;
