import { Equality, partial, pipe } from "../../../functions.js";

import type * as Observable from "../../Observable.js";
import * as DistinctUntilChangedSink from "../../__internal__/sinks/DistinctUntilChangedSink.js";
import Observable_lift from "./Observable.lift.js";

const Observable_distinctUntilChanged: Observable.Signature["distinctUntilChanged"] =
  (<T>(options?: { readonly equality?: Equality<T> }) =>
    pipe(
      DistinctUntilChangedSink.create,
      partial(options),
      Observable_lift<T, T>(),
    )) as Observable.Signature["distinctUntilChanged"];

export default Observable_distinctUntilChanged;
