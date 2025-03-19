import { Predicate, partial, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import * as Keep from "../../__internal__/operators/Keep.js";
import Observable_lift from "./Observable.lift.js";

const Observable_keep: Observable.Signature["keep"] = <T>(
  predicate: Predicate<T>,
) => pipe(Keep.createObserver, partial(predicate), Observable_lift<T, T>());

export default Observable_keep;
