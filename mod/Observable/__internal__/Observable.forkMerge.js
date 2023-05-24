/// <reference types="./Observable.forkMerge.d.ts" />

import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { invoke, pipe } from "../../functions.js";
import { ObservableLike_observe, } from "../../types.js";
import Observable_create from "./Observable.create.js";
import Observable_isPure from "./Observable.isPure.js";
import Observable_mergeMany from "./Observable.mergeMany.js";
import Observable_share from "./Observable.share.js";
const Observable_forkMerge = ((...ops) => (obs) => Observable_isPure(obs)
    ? pipe(ops, ReadonlyArray_map(op => op(obs)), Observable_mergeMany)
    : Observable_create(observer => {
        const src = pipe(obs, Observable_share(observer));
        pipe(ops, ReadonlyArray_map(op => op(src)), Observable_mergeMany, invoke(ObservableLike_observe, observer));
    }));
export default Observable_forkMerge;
