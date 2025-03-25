import { Function1, partial, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import * as MapOperator from "../../__internal__/operators/MapOperator.js";
import Observable_lift from "./Observable.lift.js";

const Observable_map: Observable.Signature["map"] = (<TA, TB>(
  selector: Function1<TA, TB>,
) =>
  pipe(
    MapOperator.create<TA, TB>,
    partial(selector),
    Observable_lift<TA, TB>,
  )) as Observable.Signature["map"];

export default Observable_map;
