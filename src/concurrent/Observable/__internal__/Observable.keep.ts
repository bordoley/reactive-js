import { Predicate, partial, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observer_createKeepObserver from "../../Observer/__internal__/Observer.createKeepObserver.js";
import Observable_liftPure from "./Observable.liftPure.js";

const Observable_keep: Observable.Signature["keep"] = <T>(
  predicate: Predicate<T>,
) =>
  pipe(Observer_createKeepObserver<T>, partial(predicate), Observable_liftPure);

export default Observable_keep;
