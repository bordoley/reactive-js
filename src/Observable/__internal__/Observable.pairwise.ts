import type * as Observable from "../../Observable.js";
import Observer_createPairwiseObserver from "../../Observer/__internal__/Observer.createPairwiseObserver.js";
import { pipe, returns } from "../../functions.js";
import Observable_liftSource from "./Observable.liftSource.js";

const Observable_pairwise: Observable.Signature["pairwise"] =
  /*@__PURE__*/ (() =>
    pipe(Observer_createPairwiseObserver, Observable_liftSource, returns))();

export default Observable_pairwise;
