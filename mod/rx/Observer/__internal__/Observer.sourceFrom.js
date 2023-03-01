/// <reference types="./Observer.sourceFrom.d.ts" />

import { ObservableLike_observe, } from "../../../rx.js";
const Observer_sourceFrom = (source) => observer => {
    source[ObservableLike_observe](observer);
    return observer;
};
export default Observer_sourceFrom;
