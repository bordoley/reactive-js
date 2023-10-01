/// <reference types="./Observable.pairwise.d.ts" />

import Observer_createPairwiseObserver from "../../Observer/__internal__/Observer.createPairwiseObserver.js";
import Observable_liftPure from "./Observable.liftPure.js";
const Observable_pairwise = () => Observable_liftPure((Observer_createPairwiseObserver));
export default Observable_pairwise;
