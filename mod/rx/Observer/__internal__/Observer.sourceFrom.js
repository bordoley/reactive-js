/// <reference types="./Observer.sourceFrom.d.ts" />

import { ObservableLike_observe, } from "../../../rx.js";
const Observer_sourceFrom = (source) => sink => {
    source[ObservableLike_observe](sink);
    return sink;
};
export default Observer_sourceFrom;
