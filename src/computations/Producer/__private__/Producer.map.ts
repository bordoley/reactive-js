import { Function1, partial, pipe } from "../../../functions.js";
import type * as Producer from "../../Producer.js";
import * as Map from "../../__internal__/operators/Map.js";
import Producer_lift from "./Producer.lift.js";

const Producer_map: Producer.Signature["map"] = <TA, TB>(
  selector: Function1<TA, TB>,
) => pipe(Map.createConsumer, partial(selector), Producer_lift<TA, TB>());

export default Producer_map;
