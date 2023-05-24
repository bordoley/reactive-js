import Enumerator_keep from "../../Enumerator/__internal__/Enumerator.keep.js";
import type * as Observable from "../../Observable.js";
import Observer_createKeepObserver from "../../Observer/__internal__/Observer.createKeepObserver.js";
import { Predicate, partial, pipe } from "../../functions.js";
import Observable_liftPure from "./Observable.liftPure.js";

const Observable_keep: Observable.Signature["keep"] = <T>(
  predicate: Predicate<T>,
) => {
  const op = pipe(Observer_createKeepObserver<T>, partial(predicate));

  return Observable_liftPure(Enumerator_keep(predicate), op);
};

export default Observable_keep;
