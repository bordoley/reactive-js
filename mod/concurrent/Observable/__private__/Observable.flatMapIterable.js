/// <reference types="./Observable.flatMapIterable.d.ts" />

import { ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../../computations.js";
import { ObservableLike_isDeferred, } from "../../../concurrent.js";
import { compose, pipe } from "../../../functions.js";
import Observable_concatMap from "./Observable.concatMap.js";
import Observable_fromIterable from "./Observable.fromIterable.js";
const Observable_flatMapIterable = ((selector) => {
    const mapper = compose(selector, Observable_fromIterable());
    return (observable) => pipe(observable, Observable_concatMap(mapper, {
        innerType: {
            [ComputationLike_isPure]: false,
            [ObservableLike_isDeferred]: observable[ObservableLike_isDeferred],
            [ComputationLike_isSynchronous]: observable[ComputationLike_isSynchronous],
        },
    }));
});
export default Observable_flatMapIterable;
