import { BroadcasterLike } from "../../../computations.js";
import { Function2, partial, pipe, tuple } from "../../../functions.js";
import type * as Broadcaster from "../../Broadcaster.js";
import * as WithLatestFrom from "../../__internal__/operators/WithLatestFrom.js";
import Broadcaster_lift from "./Broadcaster.lift.js";

const Broadcaster_withLatestFrom: Broadcaster.Signature["withLatestFrom"] = (<
  TA,
  TB,
  T,
>(
  other: BroadcasterLike<TB>,
  selector: Function2<TA, TB, T> = tuple as unknown as Function2<TA, TB, T>,
) =>
  pipe(
    WithLatestFrom.createListener<TA, TB, T>,
    partial(other, selector),
    Broadcaster_lift<TA, T>,
  )) as Broadcaster.Signature["withLatestFrom"];

export default Broadcaster_withLatestFrom;
