import { alwaysFalse, partial, pipe, returns } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observer_createKeepObserver from "../../Observer/__private__/Observer.createKeepObserver.js";
import Observable_liftPure from "./Observable.liftPure.js";

const Observable_ignoreElements: Observable.Signature["ignoreElements"] =
  /*@__PURE__*/ (<T>() =>
    pipe(
      Observer_createKeepObserver<T>,
      partial(alwaysFalse),
      Observable_liftPure,
      returns,
    ))();

export default Observable_ignoreElements;
