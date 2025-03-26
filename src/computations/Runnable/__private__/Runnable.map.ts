import { Function1, partial, pipe } from "../../../functions.js";
import { SinkLike } from "../../../utils.js";
import type * as Runnable from "../../Runnable.js";
import * as MapSink from "../../__internal__/sinks/MapSink.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_map: Runnable.Signature["map"] = <TA, TB>(
  selector: Function1<TA, TB>,
) =>
  pipe(
    MapSink.create<SinkLike, TA, TB>,
    partial(selector),
    Runnable_lift<TA, TB>(),
  );

export default Runnable_map;
