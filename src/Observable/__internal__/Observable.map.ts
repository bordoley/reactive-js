import type * as Observable from "../../Observable.js";
import Observer_createMapObserver from "../../Observer/__internal__/Observer.createMapObserver.js";
import { Function1, partial, pipe } from "../../functions.js";
import Observable_liftSource from "./Observable.liftSource.js";

const Observable_map: Observable.Signature["map"] = <TA, TB>(
  selector: Function1<TA, TB>,
) => pipe(Observer_createMapObserver, partial(selector), Observable_liftSource);

export default Observable_map;
