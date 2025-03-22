import { Equality, partial, pipe } from "../../../functions.js";

import type * as Producer from "../../Producer.js";
import * as DistinctUntilChanged from "../../__internal__/operators/DistinctUntilChanged.js";
import Producer_lift from "./Producer.lift.js";

const Producer_distinctUntilChanged: Producer.Signature["distinctUntilChanged"] =
  <T>(options?: { readonly equality?: Equality<T> }) =>
    pipe(
      DistinctUntilChanged.createConsumer,
      partial(options),
      Producer_lift<T, T>(),
    );

export default Producer_distinctUntilChanged;
