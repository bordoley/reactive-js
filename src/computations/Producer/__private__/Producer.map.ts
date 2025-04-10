import { Function1, partial, pipe } from "../../../functions.js";
import { ConsumerLike } from "../../../utils.js";
import type * as Producer from "../../Producer.js";
import * as MapSink from "../../__internal__/sinks/MapSink.js";
import Producer_lift from "./Producer.lift.js";

const Producer_map: Producer.Signature["map"] = (<TA, TB>(
  selector: Function1<TA, TB>,
) =>
  pipe(
    MapSink.create<ConsumerLike, TA, TB>,
    partial(selector),
    Producer_lift<TA, TB>(),
  )) as Producer.Signature["map"];

export default Producer_map;
