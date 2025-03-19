import { partial, pipe } from "../../../functions.js";
import type * as Runnable from "../../Runnable.js";
import * as SkipFirst from "../../__internal__/operators/SkipFirst.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_takeFirst: Runnable.Signature["takeFirst"] = <T>(options?: {
  count?: number;
}) =>
  pipe(SkipFirst.createSink, partial(options?.count), Runnable_lift<T, T>());

export default Runnable_takeFirst;
