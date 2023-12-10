import { Predicate, partial, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observer_createTakeWhileObserver from "../../Observer/__private__/Observer.createTakeWhileObserver.js";
import Observable_liftPure from "./Observable.liftPure.js";

const Observable_takeWhile: Observable.Signature["takeWhile"] = <T>(
  predicate: Predicate<T>,
  options: { readonly inclusive?: boolean } = {},
) =>
  pipe(
    Observer_createTakeWhileObserver,
    partial(predicate, options?.inclusive ?? false),
    Observable_liftPure,
  );

export default Observable_takeWhile;
