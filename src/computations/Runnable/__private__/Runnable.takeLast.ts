import { partial, pipe } from "../../../functions.js";

import * as Runnable from "../../Runnable.js";
import * as TakeLast from "../../__internal__/operators/TakeLast.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_takeLast: Runnable.Signature["takeLast"] = <T>(options?: {
  count?: number;
}) => pipe(TakeLast.createSink, partial(options?.count), Runnable_lift<T, T>());

export default Runnable_takeLast;
