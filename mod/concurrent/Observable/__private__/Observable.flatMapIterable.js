/// <reference types="./Observable.flatMapIterable.d.ts" />

import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../../computations.js";
import { compose, pipe } from "../../../functions.js";
import Observable_concatMap from "./Observable.concatMap.js";
import Observable_fromIterable from "./Observable.fromIterable.js";
const Observable_flatMapIterable = ((selector) => {
    const mapper = compose(selector, Observable_fromIterable());
    return (observable) => pipe(observable, Observable_concatMap(mapper, {
        innerType: {
            [ComputationLike_isPure]: false,
            [ComputationLike_isDeferred]: observable[ComputationLike_isDeferred],
            [ComputationLike_isSynchronous]: observable[ComputationLike_isSynchronous],
        },
    }));
});
export default Observable_flatMapIterable;
