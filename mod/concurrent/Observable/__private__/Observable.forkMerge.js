/// <reference types="./Observable.forkMerge.d.ts" />

import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import { ObservableLike_observe, } from "../../../concurrent.js";
import { invoke, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import Observable_create from "./Observable.create.js";
import Observable_isDeferred from "./Observable.isDeferred.js";
import Observable_mergeMany from "./Observable.mergeMany.js";
import Observable_multicast from "./Observable.multicast.js";
const Observable_forkMerge = (...ops) => (obs) => Observable_create(observer => {
    const src = Observable_isDeferred(obs)
        ? pipe(obs, Observable_multicast(observer, { autoDispose: true }), Disposable.addTo(observer))
        : obs;
    pipe(ops, ReadonlyArray.map(op => op(src)), Observable_mergeMany, invoke(ObservableLike_observe, observer));
});
export default Observable_forkMerge;
