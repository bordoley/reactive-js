/// <reference types="./Observable.liftEnumerableUpperBounded.d.ts" />

import { LiftedLike_operators, LiftedLike_source, } from "../../__internal__/types.js";
import Observable_createLifted from "./Observable.createLifted.js";
const Observable_liftEnumerableUpperBounded = (operator) => (source => {
    const sourceSource = source[LiftedLike_source] ?? source;
    const allFunctions = [
        operator,
        ...(source[LiftedLike_operators] ?? []),
    ];
    return Observable_createLifted(sourceSource, allFunctions, sourceSource);
});
export default Observable_liftEnumerableUpperBounded;
