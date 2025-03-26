import { partial, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import * as SkipFirstSink from "../../__internal__/sinks/SkipFirstSink.js";
import Observable_lift from "./Observable.lift.js";

const Observable_skipFirst: Observable.Signature["skipFirst"] = (<T>(options?: {
  count?: number;
}) =>
  pipe(
    SkipFirstSink.create,
    partial(options?.count),
    Observable_lift<T, T>(),
  )) as Observable.Signature["skipFirst"];

export default Observable_skipFirst;
