/// <reference types="./PauseableObservable.pairwise.d.ts" />

import Observer_createPairwiseObserver from "../../Observer/__internal__/Observer.createPairwiseObserver.js";
import { pipe, returns } from "../../functions.js";
import PauseableObservable_lift from "./PauseableObservable.lift.js";
const PauseableObservable_pairwise = 
/*@__PURE__*/ (() => pipe(Observer_createPairwiseObserver, (PauseableObservable_lift), returns))();
export default PauseableObservable_pairwise;
