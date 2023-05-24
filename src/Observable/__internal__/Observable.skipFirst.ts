import Enumerator_skipFirst from "../../Enumerator/__internal__/Enumerator.skipFirst.js";
import type * as Observable from "../../Observable.js";
import Observer_createSkipFirstObserver from "../../Observer/__internal__/Observer.createSkipFirstObserver.js";
import { clampPositiveInteger } from "../../__internal__/math.js";
import { partial, pipe } from "../../functions.js";
import Observable_liftPure from "./Observable.liftPure.js";

const Observable_skipFirst: Observable.Signature["skipFirst"] = (
  options: { readonly count?: number } = {},
) => {
  const count = clampPositiveInteger(options.count ?? 1);
  const op = pipe(Observer_createSkipFirstObserver, partial(count));

  return Observable_liftPure(Enumerator_skipFirst(count), op);
};

export default Observable_skipFirst;
