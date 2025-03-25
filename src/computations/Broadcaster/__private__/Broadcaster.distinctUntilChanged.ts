import { Equality, partial, pipe } from "../../../functions.js";

import type * as Broadcaster from "../../Broadcaster.js";
import * as DistinctUntilChangedOperator from "../../__internal__/operators/DistinctUntilChangedOperator.js";
import Broadcaster_lift from "./Broadcaster.lift.js";

const Broadcaster_distinctUntilChanged: Broadcaster.Signature["distinctUntilChanged"] =
  (<T>(options?: { readonly equality?: Equality<T> }) =>
    pipe(
      DistinctUntilChangedOperator.create,
      partial(options),
      Broadcaster_lift<T, T>,
    )) as Broadcaster.Signature["distinctUntilChanged"];

export default Broadcaster_distinctUntilChanged;
