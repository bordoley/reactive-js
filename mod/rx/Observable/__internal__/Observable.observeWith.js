/// <reference types="./Observable.observeWith.d.ts" />

import { ObservableLike_observe, } from "../../../rx.js";
const Observable_observeWith = (observer) => source => {
    source[ObservableLike_observe](observer);
    return source;
};
export default Observable_observeWith;
