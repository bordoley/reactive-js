import { Function1, partial, pipe } from "../../../functions.js";
import { EventListenerLike } from "../../../utils.js";
import type * as Broadcaster from "../../Broadcaster.js";
import * as MapOperator from "../../__internal__/operators/MapOperator.js";
import Broadcaster_lift from "./Broadcaster.lift.js";

const Broadcaster_map: Broadcaster.Signature["map"] = (<TA, TB>(
  selector: Function1<TA, TB>,
) =>
  pipe(
    MapOperator.create<EventListenerLike, TA, TB>,
    partial(selector),
    Broadcaster_lift<TA, TB>,
  )) as Broadcaster.Signature["map"];

export default Broadcaster_map;
