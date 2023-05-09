/// <reference types="./HigherOrderObservable.defer.d.ts" />

import { ObservableLike_observe, } from "../../types.js";
const HigherOrderObservable_defer = (createObservable) => (factory) => createObservable(observer => {
    factory()[ObservableLike_observe](observer);
});
export default HigherOrderObservable_defer;
