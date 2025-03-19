import { Function1, partial, pipe } from "../../../functions.js";
import type * as Broadcaster from "../../Broadcaster.js";
import * as Map from "../../__internal__/operators/Map.js";
import Broadcaster_lift from "./Broadcaster.lift.js";

const Broadcaster_map: Broadcaster.Signature["map"] = <TA, TB>(
  selector: Function1<TA, TB>,
) =>
  pipe(Map.createListener<TA, TB>, partial(selector), Broadcaster_lift<TA, TB>);

export default Broadcaster_map;
