/// <reference types="./Observable.observeWith.d.ts" />

import { ObservableLike_observe, } from "../../../rx.js";
const Observable_observeWith = (sink) => source => {
    source[ObservableLike_observe](sink);
    return source;
};
export default Observable_observeWith;
