import { Function1, partial, pipe } from "../../../functions.js";
import { SinkLike } from "../../../utils.js";
import type * as Broadcaster from "../../Broadcaster.js";
import * as MapSink from "../../__internal__/sinks/MapSink.js";
import Broadcaster_lift from "./Broadcaster.lift.js";

const Broadcaster_map: Broadcaster.Signature["map"] = (<TA, TB>(
  selector: Function1<TA, TB>,
) =>
  pipe(
    MapSink.create<SinkLike, TA, TB>,
    partial(selector),
    Broadcaster_lift<TA, TB>,
  )) as Broadcaster.Signature["map"];

export default Broadcaster_map;
