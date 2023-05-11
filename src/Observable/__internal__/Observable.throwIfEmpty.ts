import type * as Observable from "../../Observable.js";
import Observer_createThrowIfEmptyObserver from "../../Observer/__internal__/Observer.createThrowIfEmptyObserver.js";
import { Factory, partial, pipe } from "../../functions.js";
import Observable_liftSource from "./Observable.liftSource.js";

const Observable_throwIfEmpty: Observable.Signature["throwIfEmpty"] = (
  factory: Factory<unknown>,
) =>
  pipe(
    Observer_createThrowIfEmptyObserver,
    partial(factory),
    Observable_liftSource,
  );

export default Observable_throwIfEmpty;
