import { BroadcasterLike } from "../../../computations.js";
import { SideEffect, partial, pipe } from "../../../functions.js";
import { EventListenerLike, SinkLike } from "../../../utils.js";
import type * as Broadcaster from "../../Broadcaster.js";
import * as TakeUntilSink from "../../__internal__/sinks/TakeUntilSink.js";
import Broadcaster_addEventHandler from "./Broadcaster.addEventHandler.js";
import Broadcaster_lift from "./Broadcaster.lift.js";

const addEventListener = (_: EventListenerLike, effect: SideEffect) =>
  Broadcaster_addEventHandler(effect);

const Broadcaster_takeUntil: Broadcaster.Signature["takeUntil"] = (<T>(
  notifier: BroadcasterLike,
) =>
  pipe(
    TakeUntilSink.create<SinkLike, T, BroadcasterLike>,
    partial(notifier, addEventListener),
    Broadcaster_lift,
  )) as Broadcaster.Signature["takeUntil"];

export default Broadcaster_takeUntil;
