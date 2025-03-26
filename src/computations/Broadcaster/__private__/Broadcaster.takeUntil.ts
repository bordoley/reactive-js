import { BroadcasterLike } from "../../../computations.js";
import { SideEffect, partial, pipe } from "../../../functions.js";
import { EventListenerLike } from "../../../utils.js";
import type * as Broadcaster from "../../Broadcaster.js";
import * as TakeUntilOperator from "../../__internal__/operators/TakeUntilOperator.js";
import Broadcaster_addEventHandler from "./Broadcaster.addEventHandler.js";
import Broadcaster_lift from "./Broadcaster.lift.js";

const addEventListener = (_: EventListenerLike, effect: SideEffect) =>
  Broadcaster_addEventHandler(effect);

const Broadcaster_takeUntil: Broadcaster.Signature["takeUntil"] = (<T>(
  notifier: BroadcasterLike,
) =>
  pipe(
    TakeUntilOperator.create<EventListenerLike, T, BroadcasterLike>,
    partial(notifier, addEventListener),
    Broadcaster_lift,
  )) as Broadcaster.Signature["takeUntil"];

export default Broadcaster_takeUntil;
