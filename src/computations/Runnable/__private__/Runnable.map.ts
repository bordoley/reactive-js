import { Function1, partial, pipe } from "../../../functions.js";
import type * as Runnable from "../../Runnable.js";
import * as Map from "../../__internal__/operators/Map.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_map: Runnable.Signature["map"] = <TA, TB>(
  selector: Function1<TA, TB>,
) => pipe(Map.createSink<TA, TB>, partial(selector), Runnable_lift<TA, TB>());

export default Runnable_map;
