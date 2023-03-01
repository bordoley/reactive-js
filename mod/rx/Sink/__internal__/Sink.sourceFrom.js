/// <reference types="./Sink.sourceFrom.d.ts" />

import { ObservableLike_observe, } from "../../../rx.js";
const Sink_sourceFrom = (source) => sink => {
    source[ObservableLike_observe](sink);
    return sink;
};
export default Sink_sourceFrom;
