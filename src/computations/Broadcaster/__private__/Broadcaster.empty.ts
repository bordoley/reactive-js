import { pipe } from "../../../functions.js";
import type * as Broadcaster from "../../Broadcaster.js";
import Producer_broadcast from "../../Producer/__private__/Producer.broadcast.js";
import Producer_empty from "../../Producer/__private__/Producer.empty.js";

const Broadcaster_empty: Broadcaster.Signature["empty"] = ((options?: {
  readonly autoDispose?: boolean;
}) =>
  pipe(
    Producer_empty(),
    Producer_broadcast(options),
  )) as Broadcaster.Signature["empty"];

export default Broadcaster_empty;
