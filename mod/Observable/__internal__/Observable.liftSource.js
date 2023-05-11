/// <reference types="./Observable.liftSource.d.ts" />

import { createInstanceFactory } from "../../__internal__/mixins.js";
import { LiftedLike_operators, LiftedLike_source, } from "../../__internal__/types.js";
import Observable_liftMixin from "./Observable.liftMixin.js";
const Observable_liftSource = (() => {
    const createLiftedObservable = createInstanceFactory(Observable_liftMixin());
    return (operator) => (source => {
        const sourceSource = source[LiftedLike_source] ?? source;
        const allFunctions = [
            operator,
            ...(source[LiftedLike_operators] ?? []),
        ];
        return createLiftedObservable(sourceSource, allFunctions, sourceSource);
    });
})();
export default Observable_liftSource;
