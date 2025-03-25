import { Equality, partial, pipe } from "../../../functions.js";

import type * as Observable from "../../Observable.js";
import * as DistinctUntilChangedOperator from "../../__internal__/operators/DistinctUntilChangedOperator.js";
import Observable_lift from "./Observable.lift.js";

const Observable_distinctUntilChanged: Observable.Signature["distinctUntilChanged"] =
  (<T>(options?: { readonly equality?: Equality<T> }) =>
    pipe(
      DistinctUntilChangedOperator.create,
      partial(options),
      Observable_lift<T, T>(),
    )) as Observable.Signature["distinctUntilChanged"];

export default Observable_distinctUntilChanged;
