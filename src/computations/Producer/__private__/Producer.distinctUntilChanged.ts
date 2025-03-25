import { Equality, partial, pipe } from "../../../functions.js";

import type * as Producer from "../../Producer.js";
import * as DistinctUntilChangedOperator from "../../__internal__/operators/DistinctUntilChangedOperator.js";
import Producer_lift from "./Producer.lift.js";

const Producer_distinctUntilChanged: Producer.Signature["distinctUntilChanged"] =
  (<T>(options?: { readonly equality?: Equality<T> }) =>
    pipe(
      DistinctUntilChangedOperator.create,
      partial(options),
      Producer_lift<T, T>(),
    )) as Producer.Signature["distinctUntilChanged"];

export default Producer_distinctUntilChanged;
