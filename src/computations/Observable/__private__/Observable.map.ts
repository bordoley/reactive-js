import { Function1, partial, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import * as Map from "../../__internal__/operators/Map.js";
import Observable_lift from "./Observable.lift.js";

const Observable_map: Observable.Signature["map"] = <TA, TB>(
  selector: Function1<TA, TB>,
) => pipe(Map.createObserver, partial(selector), Observable_lift<TA, TB>());

export default Observable_map;
