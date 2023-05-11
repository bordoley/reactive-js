/// <reference types="./Observable.defer.d.ts" />

import DeferredObservable_create from "../../DeferredObservable/__internal__/DeferredObservable.create.js";
import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import { invoke, pipe } from "../../functions.js";
import { ObservableLike_observe, } from "../../types.js";
const Observable_defer = (factory) => DeferredObservable_create(observer => {
    pipe(factory(), Disposable_addTo(observer), invoke(ObservableLike_observe, observer));
});
export default Observable_defer;
