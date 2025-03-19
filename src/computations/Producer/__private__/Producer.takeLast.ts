import { partial, pipe } from "../../../functions.js";

import * as Producer from "../../Producer.js";
import * as TakeLast from "../../__internal__/operators/TakeLast.js";
import Producer_lift from "./Producer.lift.js";

const Producer_takeLast: Producer.Signature["takeLast"] = <T>(options?: {
  count?: number;
}) =>
  pipe(TakeLast.createConsumer, partial(options?.count), Producer_lift<T, T>());

export default Producer_takeLast;
