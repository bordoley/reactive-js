/// <reference types="./Iterable.toObservable.d.ts" />

import * as Computation from "../../Computation.js";
import Observable_gen from "../../Observable/__private__/Observable.gen.js";
import Observable_genWithSideEffects from "../../Observable/__private__/Observable.genWithSideEffects.js";
const ObservableModule = {
    gen: Observable_gen,
    genWithSideEffects: Observable_genWithSideEffects,
};
const Iterable_toObservable = 
/*@__PURE__*/ Computation.fromIterable(ObservableModule);
export default Iterable_toObservable;
