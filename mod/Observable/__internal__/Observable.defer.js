/// <reference types="./Observable.defer.d.ts" />

import DeferredObservable_create from "../../DeferredObservable/__internal__/DeferredObservable.create.js";
import { invoke, pipe } from "../../functions.js";
import { ObservableLike_observe, } from "../../types.js";
const Observable_defer = (factory) => DeferredObservable_create(observer => {
    pipe(factory(), invoke(ObservableLike_observe, observer));
});
export default Observable_defer;
