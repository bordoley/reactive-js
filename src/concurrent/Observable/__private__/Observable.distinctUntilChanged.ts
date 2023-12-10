import { Equality, partial, pipe, strictEquality } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observer_createDistinctUntilChangedObserver from "../../Observer/__private__/Observer.createDistinctUntilChangedObserver.js";
import Observable_liftPure from "./Observable.liftPure.js";

const Observable_distinctUntilChanged: Observable.Signature["distinctUntilChanged"] =
  <T>(options?: { readonly equality?: Equality<T> }) =>
    pipe(
      Observer_createDistinctUntilChangedObserver,
      partial(options?.equality ?? strictEquality),
      Observable_liftPure,
    );

export default Observable_distinctUntilChanged;
