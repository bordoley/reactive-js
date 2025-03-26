import { Function1, partial, pipe } from "../../../functions.js";
import { ObserverLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import * as MapSink from "../../__internal__/sinks/MapSink.js";
import Observable_lift from "./Observable.lift.js";

const Observable_map: Observable.Signature["map"] = (<TA, TB>(
  selector: Function1<TA, TB>,
) =>
  pipe(
    MapSink.create<ObserverLike, TA, TB>,
    partial(selector),
    Observable_lift<TA, TB>(),
  )) as Observable.Signature["map"];

export default Observable_map;
