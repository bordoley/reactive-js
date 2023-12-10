import { Factory, partial, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observer_createThrowIfEmptyObserver from "../../Observer/__private__/Observer.createThrowIfEmptyObserver.js";
import Observable_liftPure from "./Observable.liftPure.js";

const Observable_throwIfEmpty: Observable.Signature["throwIfEmpty"] = (
  factory: Factory<unknown>,
) =>
  pipe(
    Observer_createThrowIfEmptyObserver,
    partial(factory),
    Observable_liftPure,
  );

export default Observable_throwIfEmpty;
