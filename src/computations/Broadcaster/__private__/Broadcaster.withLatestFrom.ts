import { BroadcasterLike } from "../../../computations.js";
import {
  Function2,
  SideEffect1,
  partial,
  pipe,
  tuple,
} from "../../../functions.js";
import { EventListenerLike } from "../../../utils.js";
import type * as Broadcaster from "../../Broadcaster.js";
import * as WithLatestFrom from "../../__internal__/operators/WithLatestFromOperator.js";
import Broadcaster_addEventHandler from "./Broadcaster.addEventHandler.js";
import Broadcaster_lift from "./Broadcaster.lift.js";

const addEventListener = <TB>(_: EventListenerLike, effect: SideEffect1<TB>) =>
  Broadcaster_addEventHandler(effect);

const Broadcaster_withLatestFrom: Broadcaster.Signature["withLatestFrom"] = (<
  TA,
  TB,
  T,
>(
  other: BroadcasterLike<TB>,
  selector: Function2<TA, TB, T> = tuple as unknown as Function2<TA, TB, T>,
) =>
  pipe(
    WithLatestFrom.create<EventListenerLike, BroadcasterLike<TB>, TA, TB, T>,
    partial(other, selector, addEventListener),
    Broadcaster_lift<TA, T>,
  )) as Broadcaster.Signature["withLatestFrom"];

export default Broadcaster_withLatestFrom;
