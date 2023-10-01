import { Tuple2 } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observer_createPairwiseObserver from "../../Observer/__internal__/Observer.createPairwiseObserver.js";
import Observable_liftPure from "./Observable.liftPure.js";

const Observable_pairwise: Observable.Signature["pairwise"] = <T>() =>
  Observable_liftPure<T, Tuple2<T, T>>(Observer_createPairwiseObserver<T>);

export default Observable_pairwise;
