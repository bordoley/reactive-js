import type * as Observable from "../../Observable.js";
import { Predicate, compose, negate } from "../../functions.js";
import Observable_everySatisfy from "./Observable.everySatisfy.js";

const Observable_noneSatisfy: Observable.Signature["noneSatisfy"] = <T>(
  predicate: Predicate<T>,
) => Observable_everySatisfy(compose(predicate, negate));

export default Observable_noneSatisfy;
