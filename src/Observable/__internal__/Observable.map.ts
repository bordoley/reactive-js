import Enumerator_map from "../../Enumerator/__internal__/Enumerator.map.js";
import type * as Observable from "../../Observable.js";
import Observer_createMapObserver from "../../Observer/__internal__/Observer.createMapObserver.js";
import { Function1, partial, pipe } from "../../functions.js";
import Observable_liftPure from "./Observable.liftPure.js";

const Observable_map: Observable.Signature["map"] = <TA, TB>(
  selector: Function1<TA, TB>,
) => {
  const op = pipe(Observer_createMapObserver<TA, TB>, partial(selector));

  return Observable_liftPure(Enumerator_map(selector), op);
};

export default Observable_map;
