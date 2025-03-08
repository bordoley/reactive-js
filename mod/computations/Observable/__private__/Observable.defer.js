/// <reference types="./Observable.defer.d.ts" />

import { ObservableLike_observe, } from "../../../computations.js";
import { invoke, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import Observable_createPureDeferredObservable from "./Observable.createPureDeferredObservable.js";
const Observable_defer = (factory) => Observable_createPureDeferredObservable(observer => {
    pipe(factory(), Disposable.addTo(observer), invoke(ObservableLike_observe, observer));
});
export default Observable_defer;
