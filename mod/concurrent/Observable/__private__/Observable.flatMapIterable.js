/// <reference types="./Observable.flatMapIterable.d.ts" />

import { ObservableLike_isPure } from "../../../concurrent.js";
import { compose, pipe } from "../../../functions.js";
import Observable_concatMap from "./Observable.concatMap.js";
import Observable_fromIterable from "./Observable.fromIterable.js";
const Observable_flatMapIterable = ((selector) => {
    const mapper = compose(selector, Observable_fromIterable());
    return (observable) => pipe(observable, Observable_concatMap(mapper, {
        innerType: {
            ...observable,
            [ObservableLike_isPure]: false,
        },
    }));
});
export default Observable_flatMapIterable;
