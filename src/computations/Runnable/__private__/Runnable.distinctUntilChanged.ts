import { Equality, partial, pipe } from "../../../functions.js";

import type * as Runnable from "../../Runnable.js";
import * as DistinctUntilChangedSink from "../../__internal__/sinks/DistinctUntilChangedSink.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_distinctUntilChanged: Runnable.Signature["distinctUntilChanged"] =
  <T>(options?: { readonly equality?: Equality<T> }) =>
    pipe(
      DistinctUntilChangedSink.create,
      partial(options),
      Runnable_lift<T, T>(),
    );
export default Runnable_distinctUntilChanged;
