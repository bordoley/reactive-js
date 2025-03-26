import { Equality, partial, pipe } from "../../../functions.js";

import type * as Producer from "../../Producer.js";
import * as DistinctUntilChangedSink from "../../__internal__/sinks/DistinctUntilChangedSink.js";
import Producer_lift from "./Producer.lift.js";

const Producer_distinctUntilChanged: Producer.Signature["distinctUntilChanged"] =
  (<T>(options?: { readonly equality?: Equality<T> }) =>
    pipe(
      DistinctUntilChangedSink.create,
      partial(options),
      Producer_lift<T, T>(),
    )) as Producer.Signature["distinctUntilChanged"];

export default Producer_distinctUntilChanged;
