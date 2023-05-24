/// <reference types="./Observable.pairwise.d.ts" />

import Enumerator_pairwise from "../../Enumerator/__internal__/Enumerator.pairwise.js";
import Observer_createPairwiseObserver from "../../Observer/__internal__/Observer.createPairwiseObserver.js";
import Observable_liftPure from "./Observable.liftPure.js";
const Observable_pairwise = () => Observable_liftPure(Enumerator_pairwise(), (Observer_createPairwiseObserver));
export default Observable_pairwise;
