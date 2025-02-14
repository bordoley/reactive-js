/// <reference types="./Observable.forkMerge.d.ts" />

import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import { ObservableLike_observe, } from "../../../concurrent.js";
import { invoke, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import Observable_create from "./Observable.create.js";
import Observable_isDeferred from "./Observable.isDeferred.js";
import Observable_mergeMany from "./Observable.mergeMany.js";
import Observable_multicast from "./Observable.multicast.js";
const Observable_forkMerge = ((...ops) => (obs) => Observable_isDeferred(obs)
    ? Observable_create(observer => {
        const src = pipe(obs, Observable_multicast(observer, { autoDispose: true }), Disposable.addTo(observer));
        pipe(ops, ReadonlyArray.map(op => op(src)), Observable_mergeMany, invoke(ObservableLike_observe, observer));
    })
    : pipe(ops, ReadonlyArray.map(op => op(obs)), Observable_mergeMany));
export default Observable_forkMerge;
