import { Predicate, partial, pipe } from "../../../functions.js";
import { EventListenerLike } from "../../../utils.js";
import type * as Broadcaster from "../../Broadcaster.js";
import * as KeepSink from "../../__internal__/sinks/KeepSink.js";
import Broadcaster_lift from "./Broadcaster.lift.js";

const Broadcaster_keep: Broadcaster.Signature["keep"] = (<T>(
  predicate: Predicate<T>,
) =>
  pipe(
    KeepSink.create<EventListenerLike, T>,
    partial(predicate),
    Broadcaster_lift<T, T>,
  )) as Broadcaster.Signature["keep"];

export default Broadcaster_keep;
