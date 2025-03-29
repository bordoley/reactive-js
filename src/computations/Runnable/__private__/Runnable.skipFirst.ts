import { partial, pipe } from "../../../functions.js";
import type * as Runnable from "../../Runnable.js";
import * as SkipFirstSink from "../../__internal__/sinks/SkipFirstSink.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_takeFirst: Runnable.Signature["takeFirst"] = <T>(options?: {
  count?: number;
}) =>
  pipe(SkipFirstSink.create, partial(options?.count), Runnable_lift<T, T>());

export default Runnable_takeFirst;
