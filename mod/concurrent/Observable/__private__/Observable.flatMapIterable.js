/// <reference types="./Observable.flatMapIterable.d.ts" />

import { ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, } from "../../../concurrent.js";
import { compose, pipe } from "../../../functions.js";
import Observable_concatMap from "./Observable.concatMap.js";
import Observable_fromIterable from "./Observable.fromIterable.js";
const Observable_flatMapIterable = ((selector) => {
    const mapper = compose(selector, Observable_fromIterable());
    return (observable) => pipe(observable, Observable_concatMap(mapper, {
        innerType: {
            [ObservableLike_isPure]: false,
            [ObservableLike_isDeferred]: observable[ObservableLike_isDeferred],
            [ObservableLike_isRunnable]: observable[ObservableLike_isRunnable],
        },
    }));
});
export default Observable_flatMapIterable;
